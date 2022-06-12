import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login.js";
import axios from "axios";
import { connect } from "react-redux";
import { getUserLogout, getShopSearch, deleteUserInfo } from "../store/store";
const Navbar = styled.nav`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em;
`;
const Logo = styled.div``;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
const Search = styled.div`
  height: 30%;

  align-items: center;
  justify-content: center;
`;
const Mypagebutton = styled.button``;
const Img = styled.img`
  width: 120px;
  height: 50px;
  margin-left: 1rem;
`;

function Header({ userInfo, loginState, logout, shopsearch, deleteUserInfo }) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [searchedshop, setSearchedshop] = useState("");
  const [goMypage, setGoMypage] = useState("/")
  const clickLoginButton = () => {
    setIsOpen(!isOpen);
  };
 const clickLogoutBtn = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/logout`)
      .then((resp) => {
        logout()
        deleteUserInfo()
        navigate('/')
      });
  };
  const controlClose = (val) => {
    setIsOpen(val);
  };
  const searchText = (e) => {
    e.preventDefault();
    setSearchedshop(e.target.value);
  };
  const searchShop = (e) => {
    e.preventDefault();
    shopsearch(searchedshop);
  };
  const clickMypage = (e) => {
    if(loginState === false) {
      alert('로그인이 필요한 서비스입니다.')
      setGoMypage('/')
    }else if(loginState === true) {
      setGoMypage('/Mypage')
    }
  }
  return (
    <header>
      <Navbar>
        <Logo>
          <Link to="/">
            <Img src="img/nostandinglogo2.jpeg" />
          </Link>
        </Logo>
        <Search>
          <input
            placeholder="가게이름을 입력하세요."
            onChange={searchText}
          ></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={searchShop}
          ></FontAwesomeIcon>
        </Search>
        <Menu>
          {loginState ? (
            <>
              <div>환영합니다 {userInfo.nickname}님</div>
              <button onClick={clickLogoutBtn}>로그아웃</button>
            </>
          ) : (
            <>
              <button onClick={clickLoginButton}>로그인</button>
              <Link to="/Signup">
                <button>회원가입</button>
              </Link>
            </>
          )}
          {isOpen ? <Login controlClose={controlClose} /> : null}
          <Link to={goMypage}>
            <Mypagebutton onClick={clickMypage}>마이페이지</Mypagebutton>
          </Link>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </Menu>
      </Navbar>
    </header>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
    loginState: state.loginState.userLoginState,
    searchShop: state.shopSearch.shopSearchInfo,
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
    shopsearch: (resp) => {
      dispatch(getShopSearch(resp));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
