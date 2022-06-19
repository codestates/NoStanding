import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import axios from "axios";
import MasterReviewmodal from "./MasterReviewmodal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-left: 25em;
  h2 {
    margin: 1em;
  }
`;

const Div = styled.div`
  width: 100%;
`;
const ReviewBox = styled.div`
  padding: 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(21, 64, 99);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
const ReviewButton = styled.button`
  margin: 1em;
  width: 4em;
  height: 2em;
  background-color: rgb(21, 64, 99);
  color: white;
  position: relative;
  float: right;
  margin-left: auto;
  border-radius: 0.5rem;

  :hover {
    transform: scale(1.05);
    background-color: tomato;
  }
`;
const Rereviewbox = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid rgb(21, 64, 99);
`;
const Img = styled.img`
  width: 4em;
  height: 4em;
  margin: 1em 3em 1em 1em;
`;
const UserNameDiv = styled.div`
  font-size: larger;
  font-weight: bold;
  margin-bottom: 1em;
`;
const DateDiv = styled.div`
  font-size: small;
  color: rgb(85, 85, 85);
`;

const StarDiv = styled.div`
  margin-top: 1em;
  color: #ef5e28;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.primary};
  height: 100%;
  .content {
    width: 70%;
  }
`;
function Review({ userInfo }) {
  const [img, setImg] = useState([]);
  const [rereview, setRereview] = useState([]);
  const [review, setReview] = useState([]);
  const [open, isOpen] = useState(false); //리리뷰 펼치기
  const [rereviewopen, setRereviewopen] = useState(false);
  const [buttonNum, setButtonNum] = useState(0);
  const [masterreview, setMasterreview] = useState("");
  const [reviewId, setReviewId] = useState("");
  const stars = ["★", "★★", "★★★", "★★★★", "★★★★★"];

  //리리뷰창을 열었을때 그 리뷰의 아이디를 전송해주고 모달창을 여는 작업이 필요
  const sendDate = (id) => {
    setRereviewopen(!rereviewopen);
    setReviewId(id);
  };
  const deleteRereview = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/mypage/re_review/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        getReviewInfo();
      })
      .catch((err) => alert(err));
  };
  const getReviewInfo = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/re_review/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp.data.data.Reviews);
        const filterimg = resp.data.data.Reviews.map((img) => {
          if (img.image_src) {
            img.image_src = JSON.parse(img.image_src)[0];
          } else {
            return;
          }
          return;
        });
        console.log(resp.data.data.Reviews);

        setReview(resp.data.data.Reviews);
        setRereview(resp.data.data.ReReviews);
      });
  }, []);
  useEffect(() => {
    getReviewInfo();
  }, [getReviewInfo]);
  console.log(rereview);
  const makeDate = (val) => {
    let front = val.substring(0, 10);
    let back = val.substring(11, 19);
    return front + " " + back;
  };
  return (
    <Container>
      <Div>
        <h2>내 가게 후기</h2>
      </Div>

      {review?.map((Review, idx) => {
        console.log(Review);
        const reviewid = Review.id;
        const filteredRereview = rereview?.filter((Rereview) => {
          return Rereview.review_id === reviewid;
        });
        return (
          <ReviewBox key={idx} className="리뷰박스">
            <FlexDiv primary="row">
              {Review.image_src ? (
                <Img src={Review.image_src.location}></Img>
              ) : (
                <Img src={require("../../img/default.png")}></Img>
              )}
              <FlexDiv primary="column" className="content">
                <UserNameDiv>{Review.user.nickname}</UserNameDiv>
                <Div>{Review.contents}</Div>
                <StarDiv>{stars[Review.score - 1]}</StarDiv>
                <DateDiv>{makeDate(Review.createdAt)}</DateDiv>
              </FlexDiv>
              <FlexDiv primary="column">
                <ReviewButton onClick={() => sendDate(reviewid)} idx={idx}>
                  답글
                </ReviewButton>
                <ReviewButton
                  onClick={() => {
                    isOpen(!open);
                    setButtonNum(idx);
                  }}
                >
                  펼치기
                </ReviewButton>
              </FlexDiv>
            </FlexDiv>

            {open && buttonNum === idx ? (
              <Rereviewbox>
                {!(filteredRereview.length === 0) ? (
                  filteredRereview?.map((Rereview, idx) => {
                    console.log(Rereview);
                    return (
                      <FlexDiv primary="column" key={idx}>
                        <FlexDiv primary="row">
                          {userInfo.image_src ? (
                            <Img src={userInfo.image_src}></Img>
                          ) : (
                            <Img src={require("../../img/default.png")}></Img>
                          )}
                          <FlexDiv primary="column">
                            <UserNameDiv>{userInfo.user_name}</UserNameDiv>
                            <div>{Rereview.contents}</div>
                            <DateDiv>{makeDate(Rereview.updatedAt)}</DateDiv>
                          </FlexDiv>
                        </FlexDiv>
                        <ReviewButton
                          onClick={() => deleteRereview(Rereview.id)}
                        >
                          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </ReviewButton>
                      </FlexDiv>
                    );
                  })
                ) : (
                  <div>리댓을 작성해주세요!!!</div>
                )}
              </Rereviewbox>
            ) : null}
          </ReviewBox>
        );
      })}
      {rereviewopen ? (
        <MasterReviewmodal
          isOpen={setRereviewopen}
          reviewId={reviewId}
          getReviewInfo={getReviewInfo}
        ></MasterReviewmodal>
      ) : null}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}

export default connect(mapStateToProps)(Review);
