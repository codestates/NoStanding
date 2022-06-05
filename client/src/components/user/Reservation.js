import React from 'react';
import styled from 'styled-components';
import ReservationInfo from './ReservationInfo';
const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 90vw;
`;
const H2 = styled.h2`
  margin: 1em;
`;
const Div = styled.div`
  border-bottom: 2px solid black;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  align-items: center;
  height: 2em;
`;
const ChooseDiv = styled.div`
  width: 50%;
  text-align: center;
`;
const Span = styled.span`
  height: 100%;
  border: 1px solid black;
`
function Reservation() {
  return (
    <Container>
      <Div>
        <H2>예약 내역</H2>
      </Div>
      <Flex direction="row">
        <ChooseDiv>현재 예약 내역</ChooseDiv>
        <Span></Span>
        <ChooseDiv>이전 예약 내역</ChooseDiv>
      </Flex>
      <div>
        <ReservationInfo />
      </div>
    </Container>
  );
}

export default Reservation;
