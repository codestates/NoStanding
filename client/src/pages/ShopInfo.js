import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import dummyimg from "../dummyimg";
import Map from "../components/Map";
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";
import ReservationModal from "../components/ReservationModal";
const MainImg = styled.img`
  width: 400px;
  height: 400px;
`;
const SelectImg = styled.img`
  width: 100px;
  height: 100px;
`;
const Imgcontainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Imgselectbox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 200px;
`;
const Bookbutton = styled.button`
  border: 2px solid black;
  height: 100px;
`;
function ShopInfo() {
  const [img, setImg] = useState([]);
  const [pickedShop, setPickedShop] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const [openReservation, setOpenReservation] = useState(false)
  const getPickedShopInfo = useCallback(async () => {
    const shopId = Number(window.location.pathname.slice(10));
    await axios
      .get(`${process.env.REACT_APP_API_URL}/shop/${shopId}`)
      .then((resp) => {
        setPickedShop(resp.data.data[0]);
      });
    setIsLoading(false);
  }, []);
  const clickImg = (idx) => {
    setCurrentImg(idx);
  };
  const clickReservation = () => {
    setOpenReservation(!openReservation)}

  useEffect(() => {
    getPickedShopInfo();
  }, [getPickedShopInfo]);

  useEffect(() => {
    setImg([...String(pickedShop.image_src).split(",")]);
  }, [pickedShop]);
  return (
    <>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <div>{pickedShop.user.shop_name}</div>
          <Imgcontainer>
            <MainImg src={img[currentImg]}></MainImg>
            <Imgselectbox>
              {img.map((image, idx) => {
                return (
                  <SelectImg
                    onClick={() => clickImg(idx)}
                    key={idx}
                    src={image}
                  ></SelectImg>
                );
              })}
            </Imgselectbox>
          </Imgcontainer>
          <Box>
            <NameandReviewbar>{pickedShop.contents}</NameandReviewbar>
            <MapContainer>
              <Map x={pickedShop.x} y={pickedShop.y}></Map>
            </MapContainer>
            <Info>
              <div>영업시간: {pickedShop.business_hour}</div>
              <div>휴무일: {pickedShop.holiday} </div>
              <div>전화번호: {pickedShop.phone_number} </div>
            </Info>
            <Review>리뷰자리입니다.</Review>
            {/* pickedShop.reviews.map */}
            {openReservation? <ReservationModal pickedShop={pickedShop} setOpenReservation={setOpenReservation} />:null}
            <Bookbutton onClick={clickReservation}>예약하기</Bookbutton>
          </Box>
        </>
      )}
    </>
  );
}

export default ShopInfo;
