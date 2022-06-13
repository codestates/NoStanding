import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Post from "../Post";
import axios from "axios";
import { connect } from "react-redux";
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

function UserInfo({ userInfo, logout, deleteUserInfo }) {
  const navigate = useNavigate();
  console.log(userInfo);
  const [address, setAddress] = useState("");
  const [popup, setPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setRetypepassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [shopname, setShopname] = useState("");
  const [shopcategory, setshopcategory] = useState("");
  const [shopcategorycity, setshopcategorycitye] = useState("");
  const [pwdValid, setPwdValid] = useState(true);
  const [email, setEmail] = useState("");

  const inputChangeCheckPwd = (e) => {
    if (password !== retypepassword) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };

  const changeUserinfo = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/mypage/userinfo/${userInfo.user_name}`,
        {
          user_name: `${userInfo.user_name}`,
          password:
            password && password === retypepassword
              ? `${password}`
              : `${userInfo.password}`,
          nickname: nickname ? `${nickname}` : `${userInfo.nickname}`,
          phone_number: phonenumber
            ? `${phonenumber}`
            : `${userInfo.phone_number}`,
          shop_name: shopname ? `${shopname}` : `${userInfo.shop_name}`,
          shop_category: `${userInfo.shop_category}`,
          shop_category_city: `${userInfo.shop_category_city}`,
          address_line1: address ? `${address}` : `${userInfo.address_line1}`,
          address_line2: `${userInfo.address_line2}`,
          postal_code: `${userInfo.postal_code}`,
          email: email ? `${email}` : `${userInfo.email}`,
          is_master: userInfo.is_master,
        },
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);

        alert(`수정이 완료되었습니다. 다시 로그인해주세요.`);
        logout();
        deleteUserInfo();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
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
              <input type="text" value={userInfo.user_name} disabled />
            </Flex>
            <Flex direction="row">
              <div>패스워드 :</div>
              <input
                placeholder="******"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Flex>
            <Flex direction="row">
              <div>패스워드 확인 :</div>
              <input
                placeholder="******"
                type="password"
                value={retypepassword}
                onChange={(e) => setRetypepassword(e.target.value)}
              />
              {pwdValid ? null : <div>비밀번호가 일치하지 않습니다.</div>}
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="row">
          <div>닉네임 :</div>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </Flex>
        <Flex direction="row">
          <div>가게이름 :</div>
          <input
            type="text"
            value={shopname}
            onChange={(e) => setShopname(e.target.value)}
          />
        </Flex>
        <Flex direction="row">
          <div>가게 주소 :</div>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <button
            onClick={() => {
              setPopup(!popup);
            }}
          >
            검색
          </button>
          {popup ? (
            <Post address={address} setAddress={setAddress}></Post>
          ) : null}
        </Flex>
        <Flex direction="row">
          <div>핸드폰 번호 인증 :</div>
          <input
            type="text"
            onChange={(e) => setPhonenumber(e.target.value)}
            value={phonenumber}
          />
        </Flex>
        <Flex direction="row">
          <div>이메일(중복확인) :</div>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Flex>
        <button onClick={changeUserinfo}>수정하기</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
