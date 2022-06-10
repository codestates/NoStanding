import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReservationInfo from "./ReservationInfo";
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
  height: 100%;
  text-align: center;
  background-color: ${(props) =>
    props.idx === props.isOn ? "rgba(0, 0, 0, 0.2)" : null};
`;
const Span = styled.span`
  height: 100%;
  border: 1px solid black;
`;
function Reservation({ userInfo }) {
  const [reservationList, setReservationList] = useState([]);
  const [chooseList, setChooseList] = useState(1);
  const [reservationDatas, setReservationDatas] = useState([]);

  const getInfo = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/reservation/${userInfo.user_name}`,
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        setReservationDatas([...resp.data.data]);
      });
  }, []);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  useEffect(() => {
    const nowDate = new Date(+new Date() + 3240 * 10000)
      .toISOString()
      .replace(/[^0-9]/g, "");
    const nowReservations = reservationDatas.filter((data) => {
      return Number(data.date.replace(/[^0-9]/g, "")) > Number(nowDate);
    });
    setReservationList([...nowReservations]);
  }, [reservationDatas]);

  const clickChooseDiv = (data) => {
    setChooseList(data);
    const nowDate = new Date(+new Date() + 3240 * 10000)
      .toISOString()
      .replace(/[^0-9]/g, "");
    if (data === 1) {
      const nowReservations = reservationDatas.filter((data) => {
        return Number(data.date.replace(/[^0-9]/g, "")) > Number(nowDate);
      });
      setReservationList([...nowReservations]);
    } else if (data === 2) {
      const pastReservations = reservationDatas.filter((data) => {
        return Number(data.date.replace(/[^0-9]/g, "")) < Number(nowDate);
      });
      setReservationList([...pastReservations]);
    }
  };

  return (
    <Container>
      <Div>
        <H2>예약 내역</H2>
      </Div>
      <Flex direction="row">
        <ChooseDiv idx={1} onClick={() => clickChooseDiv(1)} isOn={chooseList}>
          현재 예약 내역
        </ChooseDiv>
        <Span></Span>
        <ChooseDiv idx={2} onClick={() => clickChooseDiv(2)} isOn={chooseList}>
          이전 예약 내역
        </ChooseDiv>
      </Flex>
      <div>
        {reservationList.map((reservate) => (
          <ReservationInfo
            key={reservate.id}
            reservate={reservate}
            isToday={chooseList}
            getInfo={getInfo}
          />
        ))}
      </div>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(Reservation);
