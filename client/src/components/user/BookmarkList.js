import axios from "axios";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Container = styled.li`
  width: 22.2vw;
  height: 38vh;
  border: 2px solid black;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 60%;
  border: 2px solid black;
`;
const Star = styled.div`
  align-self: flex-start;
`;
const ShopName = styled.div`
  margin-top: 2%;
  align-self: flex-start;
`;
const ShopAddress = styled.div`
  margin-top: 2%;
  align-self: flex-start;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
  div {
    border: 2px solid black;
    margin: 0 10px 0 10px;
  }
`;
function BookmarkList({ bookmarkInfo }) {
  let img = JSON.parse(bookmarkInfo.image_src)[0].location

  return (
    <Container>
      <Img src={img}></Img>
      <ShopName>{bookmarkInfo.user.shop_name}</ShopName>
      <ShopAddress>{bookmarkInfo.user.address_line1}</ShopAddress>
      <FlexRow>
        <div>리뷰 개수 : {bookmarkInfo.Reviews.length}</div>
      </FlexRow>
    </Container>
  );
}

export default BookmarkList;
