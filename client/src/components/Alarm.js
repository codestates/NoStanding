import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReviewModal from "./ReviewModal";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const P = styled.p`
  color: ${(props) => (props.isRead === 1 ? "gray" : "black")};
`;

const Button = styled.button`
  width: 7em;
  height: 2em;
  margin-top: 5px;
  background-color: rgb(21, 64, 99);
  color: white;
  border-radius: 0.5rem;
  :hover {
    transform: scale(1.03);
  }
`;

function Alarm({userInfo, data, idx }) {
  const [openReview, setOpenReview] = useState(false);
  const [chooseIdx, setChooseIdx] = useState(0);
  console.log(userInfo);
  const clickAlarm = (id) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/mypage/notification/${userInfo.user_name}`,
        {
          id: id,
          read: 1,
        },
        {
          withCredentials: true,
        }
      )
      .then((resp) => alert(resp.data.message));
  };

  const clickOpenReview = (id) => {
    setOpenReview(true);
    setChooseIdx(id);
  };

  return (
    <Container>
      <P isRead={data.read} onClick={() => clickAlarm(data.id)}>
        {data.contents}
      </P>
      {data.review === 1 || data.rereview === 1 ? (
        <Button onClick={() => clickOpenReview(idx)}>리뷰 작성하기</Button>
      ) : null}
      {openReview ? (
        <ReviewModal
          isOpen={setOpenReview}
          shopId={data[chooseIdx].reservation.menu.shop_id}
          alarmData={data[chooseIdx]}
        />
      ) : null}
    </Container>
  )
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  }
}
export default connect(mapStateToProps)(Alarm);
