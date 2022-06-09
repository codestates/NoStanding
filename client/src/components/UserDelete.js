import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin: ${(props) => props.direction === 'column'? '5em': '1em'};
  align-items: center;
  width: 100%;
`;
const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 30%;
`
function UserDelete({userInfo}) {
  const clickDeleteBtn = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/mypage/userinfo/${userInfo.user_name}`)
  }
  return (
    <Flex direction="column">
      {/* <Flex direction="row">
        <div>아이디:</div>
        <input type="text" />
      </Flex>
      <Flex direction="row">
        <div>비밀번호:</div>
        <input type="password" />
      </Flex>
      <Flex direction="row">
        <div>비밀번호 확인:</div>
        <input type="password" />
      </Flex> */}
      <Button onClick={clickDeleteBtn}>탈퇴하기</Button>
    </Flex>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo
  }
}
export default connect(mapStateToProps) (UserDelete);
