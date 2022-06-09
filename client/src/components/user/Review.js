import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReviewInfo from "./ReviewInfo";

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

function Review({ userInfo }) {
  const [reviewData, setReviewData] = useState([]);
  const getReviewData = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/re_review/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        const shopArr = resp.data.shopArr;
        const reviews = resp.data.data.Reviews;
        for (let i = 0; i < reviews.length; i++) {
          for (let j = 0; j < shopArr.length; j++) {
            if (reviews[i].shop_id === shopArr[i].id) {
              reviews[i].shop_name = shopArr[i].user.shop_name
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
      <Div>
        <H2>내가 쓴 후기</H2>
      </Div>
      {reviewData.map((data) => (
        <div key={data.id}>
          <ReviewInfo data={data} />
        </div>
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
