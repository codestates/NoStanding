import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import axios from "axios";
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
const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid gray 2px;
`;
const ReviewButton = styled.button`
  position: absolute;
  transform: translateX(3750%);
`;
const Rereviewbox = styled.div`
  display: flex;
  flex-direction: column;
  border: solid gray 2px;
`;
function Review({ userInfo }) {
  const [rereview, setRereview] = useState([]);
  const [review, setReview] = useState([]);
  const [open, isOpen] = useState(false);
  const [buttonNum, setButtonNum] = useState(0);
  const [masterreview, setMasterreview] = useState("");
  const RereviewOpen = (idx) => {
    console.log(idx);
    setButtonNum(idx);

    isOpen(!open);
  };

  const reReviewPost = (reviewId) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage/re_review/${reviewId}/${userInfo.user_name}`,
        {
          contents: `${masterreview}`,
        },
        { withCredentials: true }
      )
      .then(() => {
        getReviewInfo();
        setMasterreview("");
      });
  };
  const getReviewInfo = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/re_review/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp.data.data);
        setReview(resp.data.data.Reviews);
        setRereview(resp.data.data.ReReviews);
      });
  }, []);
  useEffect(() => {
    getReviewInfo();
  }, [getReviewInfo]);

  return (
    <Container>
      <Div>
        <H2>내 가게 후기</H2>
      </Div>
      {review?.map((Review, idx) => {
        const reviewId = Review.id;
        const selectedRereview = rereview.filter((rereview) => {
          return Review.id === rereview.review_id;
        });
        console.log(selectedRereview);
        return (
          <ReviewBox key={idx}>
            <ReviewButton onClick={() => RereviewOpen(idx)} idx={idx}>
              답글
            </ReviewButton>
            <div>{Review.user.nickname}</div>
            <div>{Review.contents}</div>
            <div>score: {Review.score}</div>
            <div>{Review.updatedAt}</div>
            {
              open && buttonNum === idx && selectedRereview.length
                ? selectedRereview?.map((rereview, idx) => {
                    return (
                      <Rereviewbox key={idx}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />

                        <div>{userInfo.user_name}</div>
                        <div>{rereview.contents}</div>
                        <div>{rereview.updatedAt}</div>
                      </Rereviewbox>
                    );
                  })
                : null
              // <Rereviewbox>
              //   <FontAwesomeIcon icon={faArrowAltCircleRight} />
              //   <input type="text" placeholder="리댓을 달아주세욤."></input>
              //   <button>확인</button>
              // </Rereviewbox>
            }
            <input
              type="text"
              placeholder="리댓을 달아주세욤."
              onChange={(e) => setMasterreview(e.target.value)}
              value={masterreview}
            ></input>
            <button onClick={() => reReviewPost(reviewId)}>확인</button>
          </ReviewBox>
        );
      })}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}

export default connect(mapStateToProps)(Review);
