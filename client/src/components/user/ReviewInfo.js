import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid black;
`;
const Img = styled.img`
  width: 8em;
  height: 8em;
  margin: 1em;
`;
const Div = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
function ReviewInfo() {
  return (
    <Container>
      <div>
        <Img src="img/test2.png" />
      </div>
      <Div>
        <div>가게이름</div>
        <div>시간/날짜</div>
        <div>유저 사진</div>
        <div>리뷰</div>
      </Div>
    </Container>
  );
}
export default ReviewInfo;
