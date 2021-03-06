import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { deleteUserInfo, getUserLogout } from "../../store/store";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0px auto;
  h2 {
    margin: 1em;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

const TagDiv = styled.div`
  align-self: start;
  margin: 4px;
  font-size: 15px;
  font-weight: 600;
`;
const Input = styled.input`
  width: 100%;
  height: 5vh;
  font-size: 15px;
`;
const Button = styled.button`
  margin: 1em;
  width: 10em;
  height: 4em;
  background-color: rgb(21, 64, 99);
  color: white;
  border-radius: 0.5rem;
  :hover {
    transform: scale(1.03);
    background-color: tomato;
  }
`;
function UserInfo({ user, logout, deleteUserInfo }) {
  const navigate = useNavigate();
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
    e.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/mypage/userinfo/${user.user_name}`,
        {
          password: changePwd || null,
          nickname: nickname || null,
          phone_number: phoneNumber || null,
          email: email || null,
          is_master: user.is_master,
        },
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        alert(`????????? ?????????????????????. ?????? ?????????????????????.`);
        logout();
        deleteUserInfo();
        navigate("/");
      })
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <Container>
      <h2>??? ?????? ??????</h2>
      <FlexCol>
        <FlexCol>
          <TagDiv>?????????</TagDiv>
          <Input type="text" value={user.user_name} disabled />
        </FlexCol>
        <FlexCol>
          <TagDiv>?????? ????????????</TagDiv>
          <Input
            placeholder="******"
            type="password"
            value={password}
            onChange={inputPassword}
          />
        </FlexCol>
        <FlexCol>
          <TagDiv>????????? ????????????</TagDiv>
          <Input
            type="password"
            placeholder="******"
            value={changePwd}
            onChange={inputchangePwd}
          />
        </FlexCol>
        <FlexCol>
          <TagDiv>????????? ???????????? ??????</TagDiv>
          <Input
            type="password"
            placeholder="******"
            value={ckeckChangePwd}
            onChange={inputChangeCheckPwd}
          />
          {pwdValid ? null : <div>??????????????? ???????????? ????????????.</div>}
        </FlexCol>
        <FlexCol>
          <TagDiv>????????? ????????????</TagDiv>
          <Input
            type="text"
            placeholder="????????? ???????????? ???????????????"
            onChange={inputNickname}
          />
        </FlexCol>
        <FlexCol>
          <TagDiv>????????? ?????? ??????</TagDiv>
          <Input
            type="text"
            placeholder="??????????????? ???????????????."
            onChange={inputPhoneNumber}
          />
        </FlexCol>
        <Button onClick={submitModify}>????????????</Button>
      </FlexCol>
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
