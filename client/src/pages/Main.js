import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import SearchList from '../components/SearchList';

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  border: 2px solid black;
  height: 5vh;
  align-items: center;
  div {
    width: auto;
  }
`;

function Main() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <FlexCol>
        <FlexRow>
          <div>음식</div>
          <div>카페</div>
          <div>미용</div>
        </FlexRow>
        <FlexRow>
          <div>서울</div>
          <div>부산</div>
          <div>인천</div>
          <div>대구</div>
          <div>광주</div>
          <div>대전</div>
          <div>울산</div>
          <div>제주</div>
        </FlexRow>
      </FlexCol>
      <div>
        <SearchList></SearchList>
      </div>
    </>
  );
}

export default Main;
