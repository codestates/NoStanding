import React from 'react';
import styled from 'styled-components';

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
const Reservationcontainer = styled.div`
  border: solid black 2px;
  width:100%;
`
const ReservationbyTime = styled.div`
  border: solid black 2px;
  display:flex;
  flex-direction: row;
`

const Timediv = styled.div`
  text-align: left;
  margin:2px;
`
const ReservationState =styled.div`
  background-color: beige;
  width:10%;
  margin:4px;
`
const Xbutton =styled.button`
  position: absolute;
  transform: translateX(530%);
`
function Reservation() {
  return (
    <Reservationcontainer>
      <Div>
        <H2>예약 현황</H2>
      </Div>
      <ReservationbyTime>
        <Timediv>12시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>1시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>2시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>3시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>4시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>5시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>6시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>7시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      <ReservationbyTime>
        <Timediv>8시</Timediv>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>박상하쌤</div>
          <div>파워파마</div>
        </ReservationState>
        <ReservationState>
        <Xbutton>X</Xbutton>
          <div>윤선웅쌤</div>
          <div>아줌마파마</div>
        </ReservationState>
        
      </ReservationbyTime>
      
    </Reservationcontainer>
  )
}

export default Reservation