import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteUserInfo, getUserLogout } from "../store/store";
const Div = styled.div`
  border-bottom: 2px solid black;
`;
const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 90vw;
`;
const H2 = styled.h2`
  margin: 1em;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin: ${(props) => (props.direction === "column" ? "5em" : "1em")};
  align-items: center;
  width: 100%;
`;
const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`;
function UserDelete({ userInfo, logout, deleteUserInfo }) {
  const navigate = useNavigate()
  console.log(userInfo);
  const clickDeleteBtn = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/mypage/userinfo/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);
        deleteUserInfo();
        logout();
        alert('삭제 완료')
        navigate('/')
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <Container>
      <Div>
        <H2>회원탈퇴</H2>
      </Div>
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
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(getUserLogout());
    },
    deleteUserInfo: () => {
      dispatch(deleteUserInfo());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);
