import React from 'react';
import styled from 'styled-components';


const Img = styled.img`
  width: 100%;
  height: 25vh;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
function Main() {
  return (
    <>
      <div>
        <Img src="img/test.jpeg"></Img>
        <div> {'<'} </div>
        <div> {'>'} </div>
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
        <div>컴포넌트</div>
      </div>
    </>
  );
}

export default Main;
