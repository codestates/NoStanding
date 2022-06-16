import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
`;
const Button = styled.button`
  width: 7rem;
  height: 3rem;
  align-self: flex-end;
  justify-self: flex-end;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding-bottom: 100px;
  text-align: start;
  justify-content: start;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid black;
`;

function RereviewModal({ isOpen, userInfo, alarmData }) {
  const [writeReview, setWriteReview] = useState("");
  const submitReview = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage/re_review/${alarmData.Review.id}/${userInfo.user_name}`,
        {
          contents: writeReview,
        },
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        if(alarmData) {
          console.log('알람에서 바로');
        axios.patch(
          `${process.env.REACT_APP_API_URL}/mypage/notification/reviewpatch/${userInfo.user_name}`,
          {
            id: alarmData.id,
            review: 0,
          },
          {
            withCredentials: true,
          }
        ).then((resp)=> console.log(resp))
        }
      })
      .then(() => isOpen(false));
  };

  const changeTextarea = (e) => {
    setWriteReview(e.target.value);
  };

  const clickExitBtn = () => {
    isOpen(false);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={true}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          position: "absolute",
          top: "5%",
          left: "20%",
          right: "20%",
          bottom: "50%",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <Container>
        <button onClick={clickExitBtn}>닫기</button>
        <form onSubmit={submitReview}>
          <Textarea
            placeholder="리뷰를 작성해주세요."
            onChange={changeTextarea}
            value={writeReview}
          />
          <Button>리뷰 등록하기</Button>
        </form>
      </Container>
    </Modal>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}

export default connect(mapStateToProps)(RereviewModal);
