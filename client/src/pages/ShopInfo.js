import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Map from "../components/Map";
import axios from "axios";
import ReservationModal from "../components/ReservationModal";
import ShopInfoReview from "../components/ShopInfoReview";
import { connect } from "react-redux";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-self: center;
  margin: 0px auto;
`;
const HeartContainer = styled.div`
  font-size: 30px;
  color: lightcoral;
  text-align: right;
  margin-top: 1rem;
  cursor: pointer;
  p {
    :hover {
      color: red;
    }
  }
`;
const Imgcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  height: 400px;
  margin-bottom: 1rem;
`;

const MainImg = styled.img`
  width: 400px;
  height: 100%;
  margin-right: 5px;
`;

const SelectImg = styled.img`
  width: 100px;
  height: 96px;
  margin-bottom: ${(props) => (props.lastChild ? null : "5px")};
  :hover {
    transform: scale(1.05);
  }
`;

const Imgselectbox = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3vh;
`;
const ShopName = styled.h2`
font-weight: 800;
font-size: 35px;
  align-self: center;
  margin-bottom: 15px;
`;
const ScoreStarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  div{
    font-size: 14px;
    margin-right: 13px;
    color: gray;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  div{
    margin-right: 5px;
  }
`
const MapContainer = styled.div`
  display: flex;
  height: 400px;
  align-items: center;
  margin-top: 20px;
`;

const Info = styled.div`
  height: auto;
  h2{
    margin: 20px 0px;
  }
`;

const Review = styled.div`
  height: auto;
  h2{
    margin: 20px 0px;
  }
`;

const Bookbutton = styled.button`
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  width: 100%;
  position: sticky;
  bottom: 0px;
  z-index: 100;
  align-self: center;
  justify-self: flex-end;
  background-color: rgba(21, 64, 99, 0.5);
  p {
    :hover {
      transform: scale(1.05);
    }
  }
`;

function ShopInfo({ userInfo }) {
  const [img, setImg] = useState([]);
  const [pickedShop, setPickedShop] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const [openReservation, setOpenReservation] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const getPickedShopInfo = useCallback(async () => {
    const shopId = Number(window.location.pathname.slice(10));
    await axios
      .get(`${process.env.REACT_APP_API_URL}/shop/${shopId}`)
      .then((resp) => {
        const image = JSON.parse(resp.data.data[0].image_src);
        setPickedShop(resp.data.data[0]);
        for (let i = 0; i < resp.data.data[0].Bookmarks.length; i++) {
          if (resp.data.data[0].Bookmarks[i].user_id === userInfo.id) {
            if (resp.data.data[0].Bookmarks[i].is_marked === 1) {
              setIsBookmarked(true);
            }
          }
        }
        setImg(image);
      });
    setIsLoading(false);
  }, []);
  console.log(pickedShop);
  useEffect(() => {
    getPickedShopInfo();
  }, [getPickedShopInfo]);
  const clickImg = (idx) => {
    setCurrentImg(idx);
  };

  const clickReservation = () => {
    setOpenReservation(!openReservation);
  };
  const clickBookmark = () => {
    setIsBookmarked(!isBookmarked);
    axios.post(
      `${process.env.REACT_APP_API_URL}/bookmark/${pickedShop.id}/${userInfo.user_name}`,
      {
        is_marked: !isBookmarked,
      },
      {
        withCredentials: true,
      }
    );
  };

  return (
    <Container>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <HeartContainer onClick={clickBookmark}>
            {isBookmarked ? <p>♥️</p> : <p>♡</p>}
          </HeartContainer>
          <Imgcontainer>
            <MainImg src={img[currentImg]?.location}></MainImg>
            <Imgselectbox>
              {img.map((image, idx) => {
                return (
                  <SelectImg
                    lastChild={img.length - 1 === idx ? true : false}
                    onClick={() => clickImg(idx)}
                    key={idx}
                    src={image?.location}
                  ></SelectImg>
                );
              })}
            </Imgselectbox>
          </Imgcontainer>
          <Box>
            <NameScoreContainer>
              <ShopName>{pickedShop.user.shop_name}</ShopName>
              <ScoreStarDiv>
                <div>{pickedShop.total_views || 0}명의 평가</div>
                <div>{pickedShop.score_average || 0}점</div>
              </ScoreStarDiv>
            </NameScoreContainer>
            <Info>
              <h2>가게설명</h2>
              <div>{pickedShop.contents}</div>
              <h2>메뉴정보</h2>
              {pickedShop.Menus.map((menu) => (
                <MenuContainer>
                  <div>{menu.name} ------</div>
                  <div>{menu.price}원</div>
                  </MenuContainer>
              ))}
              <h2>영업시간</h2>
              <div>{pickedShop.business_hour}</div>
              <h2>휴무일</h2>
              <div>{pickedShop.holiday}</div>
              <h2>전화번호</h2>
              <div>{pickedShop.phone_number || '정보없음'}</div>
              <h2>가게위치</h2>
              <div>{pickedShop.user.address_line1 || '정보없음'}</div>
              </Info>
            <MapContainer>
              <Map x={pickedShop.x} y={pickedShop.y}></Map>
            </MapContainer>
            <Review>
              <h2>{pickedShop.total_views}건의 방문자 평가</h2>
              {pickedShop.Reviews.map((review, idx) => (
                <ShopInfoReview key={idx} review={review} />
              ))}
            </Review>
            {openReservation ? (
              <ReservationModal
                pickedShop={pickedShop}
                setOpenReservation={setOpenReservation}
              />
            ) : null}
            <Bookbutton onClick={clickReservation}>
              <p>예약하기</p>
            </Bookbutton>
          </Box>
        </>
      )}
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(ShopInfo);
