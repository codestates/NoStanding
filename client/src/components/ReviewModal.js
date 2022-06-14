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
function ReviewModal({ isOpen, userInfo, shopId }) {
  const [writeReview, setWriteReview] = useState("");
  const [imgList, setImgList] = useState([]);
  const [score, setScore] = useState("1");
  const [submitFormData, setSubmitFormData] = useState([]);
  const radioNumber = [1, 2, 3, 4, 5];
  const submitReview = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/review/${userInfo.user_name}/${shopId}`,
        {
          score: score,
          contents: writeReview,
        },
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        console.log(resp);
        const formData = new FormData();
        
        for (let i = 0; i < submitFormData.length; i++) {
          formData.append("file", submitFormData[i]);
          
        }
        // formData.append("file", submitFormData[0]);

        axios
          .post(
            `${process.env.REACT_APP_API_URL}/review/upload/${userInfo.user_name}/${shopId}`,
            formData,
            {
              withCredentials: true,
            }
          )
          .then((resp) => console.log(resp));
      })
      .then(() => isOpen(false));
  };
  const changeTextarea = (e) => {
    setWriteReview(e.target.value);
  };
  const clickExitBtn = () => {
    isOpen(false);
  };
  const changeScore = (e) => setScore(e.target.value);

  const uploadImg = (e) => {
    setSubmitFormData(e.target.files);
    const currentImgList = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImgList((prevImg) => prevImg.concat(currentImgList));
    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };

  const clickImgDelete = (id) => {
    setImgList(imgList.filter((_, index) => index !== id));
  };

  const renderImg = (source) => {
    return source.map((image, idx) => {
      return (
        <div key={idx}>
          <Img src={image} alt="" />
          <button onClick={() => clickImgDelete(idx)}>삭제</button>
        </div>
      );
    });
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
          <FlexDiv direction="row">
            {radioNumber.map((val) => (
              <FlexDiv direction="column">
                {val}점
                <input
                  type="radio"
                  name="score"
                  value={val}
                  onChange={changeScore}
                />
              </FlexDiv>
            ))}
          </FlexDiv>
          <div>{renderImg(imgList)}</div>
          <Textarea
            placeholder="리뷰를 작성해주세요."
            onChange={changeTextarea}
            value={writeReview}
          />
          <input type="file" accept="image/*" multiple onChange={uploadImg} />
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

export default connect(mapStateToProps)(ReviewModal);
