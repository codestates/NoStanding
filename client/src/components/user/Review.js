import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReviewInfo from "./ReviewInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0px auto;
  h1 {
    color: rgba(68, 68, 68, 0.8);
    margin: 1rem;
    align-self: flex-start;
  }
`;
const H2 = styled.h2`
  margin: 1em;
`;
function Review({ userInfo }) {
  const [reviewData, setReviewData] = useState([]);
  const getReviewData = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/re_review/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);
        const shopArr = resp.data.shopArr;
        const reviews = resp.data.data.Reviews;
        for (let i = 0; i < reviews.length; i++) {
          for (let j = 0; j < shopArr.length; j++) {
            if (reviews[i].shop_id === shopArr[i].id) {
              reviews[i].shop_name = shopArr[i].user.shop_name;
            }
          }
        }
        setReviewData(reviews);
      });
  }, []);
  useEffect(() => {
    getReviewData();
  }, [getReviewData]);

  return (
    <Container>
      <div>
        <H2>내가 쓴 후기</H2>
      </div>
      {reviewData.map((data) => (
        <ReviewInfo data={data} getReviewData={getReviewData} />
      ))}
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(Review);
