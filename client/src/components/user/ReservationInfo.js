import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Img = styled.img`
  width: 8em;
  height: 8em;
`
function ReservationInfo() {
  return (
    <Container>
      <div>
        <Img src='img/test2.png' />
      </div>
      <div>
        <div>가게이름</div>
        <div>주소</div>
        <div>예약시간</div>
        <div>예약 취소</div>
      </div>
    </Container>
  );
}
export default ReservationInfo;
