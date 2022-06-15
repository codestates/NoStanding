import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import ReviewModal from "./ReviewModal";
const Wrapper = styled.div`
  width: 18rem;
  height: 30rem;
  background-color: white;
  position: absolute;
  top: 40px;
  border-radius: 0.5rem;
  overflow-y: scroll;
  border: 2px solid black;
  > div {
    text-align: left;
    margin: 10px 5px;
    :hover {
      cursor: pointer;
    }
  }
`;
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
  :hover{
    transform: scale(1.03);
  }
`;

function AlarmModal({ alarmData, userInfo }) {
  const [openReview, setOpenReview] = useState(false);
  const [chooseIdx, setChooseIdx] = useState(0)
  console.log(alarmData);
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
      .then((resp) => console.log(resp));
  };
  const clickOpenReview = (id) => {
    setOpenReview(true);
    setChooseIdx(id);
  };
  console.log(chooseIdx);
  return (
    <Wrapper>
      {alarmData.map((data,idx) => (
        <div key={data.id}>
          <P isRead={data.read} onClick={() => clickAlarm(data.id)}>
            {data.contents}
          </P>
          {data.review === 1 || data.rereview === 1? (
            <Button onClick={()=>clickOpenReview(idx)}>리뷰 작성하기</Button>
          ) : null}
        </div>
      ))}
      {openReview ? (
            <ReviewModal isOpen={setOpenReview} shopId={alarmData[chooseIdx].reservation.menu.shop_id} alarmData={alarmData[chooseIdx]} />
          ) : null}
    </Wrapper>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
    alarmData: state.alarmState,
  };
}

export default connect(mapStateToProps)(AlarmModal);
