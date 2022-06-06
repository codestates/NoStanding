import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dummyimg from "../dummyimg";
import Map from "../components/Map";
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
const Info = styled.p`
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
  const [img, setImg] = useState(dummyimg[0]);
  return (
    <div>
      <Imgcontainer>
        <MainImg src={img}></MainImg>
        <Imgselectbox>
          <SelectImg src={dummyimg[0]}></SelectImg>
          <SelectImg src={dummyimg[1]}></SelectImg>
          <SelectImg src={dummyimg[2]}></SelectImg>
          <SelectImg src={dummyimg[3]}></SelectImg>
        </Imgselectbox>
      </Imgcontainer>
      <Box>
        <NameandReviewbar>가게이름과 리뷰평점</NameandReviewbar>
        <MapContainer>
          <Map></Map>
        </MapContainer>
        <Info>가게 정보 자리입니다</Info>
        <Review>리뷰자리입니다.</Review>
        <Bookbutton>예약하기</Bookbutton>
      </Box>
    </div>
  );
}

export default ShopInfo;
