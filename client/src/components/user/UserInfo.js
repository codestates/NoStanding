import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from 'axios';
import { deleteUserInfo, getUserLogout } from "../../store/store";
import { useNavigate } from "react-router-dom";
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
  justify-content: center;
  align-items: center;
  margin: 1em;
`;
const Img = styled.img`
  height: 8em;
  width: 8em;
  margin: 1em;
`;
function UserInfo({ user, logout, deleteUserInfo }) {
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [changePwd, setChangePwd] = useState("");
  const [ckeckChangePwd, setChengeCheckPwd] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pwdValid, setPwdValid] = useState(true);
  const inputPassword = (e) => setPassword(e.target.value);
  const inputchangePwd = (e) => setChangePwd(e.target.value);
  const inputChangeCheckPwd = (e) => {
    setChengeCheckPwd(e.target.value);
    if (changePwd !== ckeckChangePwd) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };
  const inputNickname = (e) => setNickname(e.target.value);
  const inputPhoneNumber = (e) => setPhoneNumber(e.target.value);
  const inputEmail = (e) => setEmail(e.target.value);

  const submitModify = (e) => {
    e.preventDefault()
    if(pwdValid ===true) {
    axios.patch(`${process.env.REACT_APP_API_URL}/mypage/userinfo/${user.user_name}`, {
      password: changePwd || null,
      nickname: nickname || null,
      phone_number: phoneNumber || null,
      email: email || null,
      is_master:user.is_master,
    }).then((resp) => {
      alert(`수정이 완료되었습니다. \ 다시 로그인해주세요.`)
      logout()
      deleteUserInfo()
      navigate('/')
    })
  }
  }
  return (
    <Container>
      <Div>
        <H2>내 정보 수정</H2>
      </Div>
      <Flex direction="column">
          <Flex direction="row">
            <Img src="img/test2.png" />
            <Flex direction="column">
              <Flex direction="row">
                <div>아이디 : </div>
                <input type="text" value={user.user_name} disabled />
              </Flex>
              <Flex direction="row">
                <div>패스워드 :</div>
                <input type="password" value={password} onChange={inputPassword} />
              </Flex>
              <Flex direction="row">
                <div>변경할 패스워드 :</div>
                <input
                  type="password"
                  value={changePwd}
                  onChange={inputchangePwd}
                />
              </Flex>
              <Flex direction="row">
                <div>변경할 패스워드 확인 :</div>
                <input
                  type="password"
                  value={ckeckChangePwd}
                  onChange={inputChangeCheckPwd}
                />
                {pwdValid ? null:<div>비밀번호가 일치하지 않습니다.</div>}
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="row">
            <div>닉네임 변경하기 :</div>
            <input
              type="text"
              defaultValue={user.nickname}
              onChange={inputNickname}
            />
          </Flex>
          <Flex direction="row">
            <div>핸드폰 번호 변경 :</div>
            <input
              type="text"
              defaultValue={user.phone_number}
              onChange={inputPhoneNumber}
            />
          </Flex>
          <Flex direction="row">
            <div>이메일 :</div>
            <input
              type="text"
              defaultValue={user.email}
              onChange={inputEmail}
            />
          </Flex>
          <button onClick={submitModify}>수정하기</button>
      </Flex>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    user: state.loginInfo.userInfo,
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
