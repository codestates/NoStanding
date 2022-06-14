import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Map from "../components/Map";
import axios from "axios";
import ReservationModal from "../components/ReservationModal";
import ShopInfoReview from "../components/ShopInfoReview";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid black;
`;

const ShopName = styled.div`
  font-size: 25px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  margin-bottom: 15px;
  flex-grow: 3;
`;

const ScoreStarDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 7;
  border: 2px solid black;
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-self: center;
`;

const NameandReviewbar = styled.div`
  border: solid black 2px;
  height: 200px;
`;

const MapContainer = styled.div`
  border: solid black 2px;
  display: flex;
  height: 400px;
  align-items: center;
`;

const Info = styled.div`
  border: solid black 2px;
  height: 200px;
`;

const Review = styled.div`
  border: solid black 2px;
  height: auto;
`;

const Bookbutton = styled.button`
  border: 2px solid black;
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  width: 100%;
  position: sticky;
  bottom: 0px;
  z-index: 100;
  align-self: center;
  justify-self: flex-end;
  background-color: rgba(21,64,99,0.5);
  p{
    :hover{
      transform: scale(1.05);
    }
  }
`;

function ShopInfo() {
  const [img, setImg] = useState([]);
  const [pickedShop, setPickedShop] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const [openReservation, setOpenReservation] = useState(false);
  console.log(pickedShop);
  const getPickedShopInfo = useCallback(async () => {
    const shopId = Number(window.location.pathname.slice(10));
    await axios
      .get(`${process.env.REACT_APP_API_URL}/shop/${shopId}`)
      .then((resp) => {
        const image = JSON.parse(resp.data.data[0].image_src);
        setPickedShop(resp.data.data[0]);
        setImg(image);
      });
    setIsLoading(false);
  }, []);

  const clickImg = (idx) => {
    setCurrentImg(idx);
  };

  const clickReservation = () => {
    setOpenReservation(!openReservation);
  };

  useEffect(() => {
    getPickedShopInfo();
  }, [getPickedShopInfo]);

  return (
    <Container>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <>
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
                <div>리뷰 : {pickedShop.total_views || 0}개</div>
                <div>별점 : {pickedShop.score_average || 0}점</div>
              </ScoreStarDiv>
            </NameScoreContainer>
            <NameandReviewbar>{pickedShop.contents}</NameandReviewbar>
            <MapContainer>
              <Map x={pickedShop.x} y={pickedShop.y}></Map>
            </MapContainer>
            <Info>
              <div>영업시간: {pickedShop.business_hour}</div>
              <div>휴무일: {pickedShop.holiday} </div>
              <div>전화번호: {pickedShop.phone_number} </div>
            </Info>
            <Review>
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
            <Bookbutton onClick={clickReservation}><p>예약하기</p></Bookbutton>
          </Box>
        </>
      )}
    </Container>
  );
}

export default ShopInfo;
