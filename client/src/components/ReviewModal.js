import React, { useState } from "react";
import Modal from "react-modal";
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
function ReviewModal({ isOpen }) {
  const [writeReview, setWriteReview] = useState("");
  const [imgList, setImgList] = useState([]);
  const [submitFormData, setSubmitFormData] = useState([]);

  const submitReview = (e) => {
    e.preventDefault();
  };
  const changeTextarea = (e) => {
    setWriteReview(e.target.value);
  };
  const clickExitBtn = () => {
    isOpen(false);
  };
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
          <div>
            <div>이미지 미리보기</div>
            {renderImg(imgList)}
          </div>
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

export default ReviewModal;
