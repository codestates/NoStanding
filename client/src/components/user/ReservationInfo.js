import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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
function ReservationInfo({ reservate, isToday, userInfo }) {
  const date = reservate.date.replace("T", " ").replace(/\..*/, "");
  console.log(reservate);
  const clickCancleBtn = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/mypage/reservation/${userInfo.user_name}/${reservate.id}`)
    .then((resp) => {
      console.log(resp)
      alert("예약 취소")
    })
  }
  return (
    <Container>
      <div>
        <Img src="img/test2.png" />
      </div>
      <Div>
        <div>{reservate.shop_name}</div>
        <div>{reservate.name}</div>
        <div>{reservate.master_address}</div>
        <div>{date}</div>
        {isToday === 1 ? <button onClick={clickCancleBtn}>예약 취소</button> : null}
      </Div>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  }
}
export default connect(mapStateToProps)(ReservationInfo);
