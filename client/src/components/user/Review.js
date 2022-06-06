import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReviewInfo from './ReviewInfo';

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

function Review({userInfo}) {
  
useEffect(()=> {
  axios.get(`${process.env.REACT_APP_API_URL}/mypage/re_review/${userInfo.user_name}`)
  .then((resp) => console.log(resp))
},[])

  return (
    <Container>
      <Div>
        <H2>내가 쓴 후기</H2>
      </Div>
      <div>
        <ReviewInfo />
      </div>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo
  }
}
export default connect(mapStateToProps)(Review);
