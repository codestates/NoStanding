import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReviewModal from "../ReviewModal";
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
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const Button = styled.button`
  width: 7rem;
  height: 3rem;
  align-self: flex-end;
`
const Textarea = styled.textarea`
  width: 100%;
  padding-bottom: 100px;
  text-align: start;
  justify-content: start;
`
function ReservationInfo({ reservate, isToday, userInfo, getInfo }) {
  const img = JSON.parse(reservate.image_src)[0].location
  const [openReviewInput, setOpenReviewInput] = useState(false);
  const date = reservate.date.replace("T", " ").replace(/\..*/, "");
  const clickCancleBtn = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/mypage/reservation/${userInfo.user_name}/${reservate.id}`,
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        alert("예약 취소 완료");
        getInfo();
      });
  };
  const clickInputOpen = () => {
    setOpenReviewInput(true);
  };
  return (
    <Container>
      <div>
        <Img src={img} />
      </div>
      <Div>
        <div>{reservate.shop_name}</div>
        <div>{reservate.name}</div>
        <div>{reservate.master_address}</div>
        <div>{date}</div>
        {isToday === 1 ? (
          <Button onClick={clickCancleBtn}>예약 취소</Button>
        ) : (
          <Button onClick={clickInputOpen}>리뷰 작성하기</Button>
        )}
        {openReviewInput ? <ReviewModal isOpen={setOpenReviewInput} shopId={reservate.shop_id} /> : null}
      </Div>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(ReservationInfo);
