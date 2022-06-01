import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faAddressCard,
  faMagnifyingGlass,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import { fa0 } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import axios from 'axios';
import { connect } from 'react-redux';
import {getUserLogout} from '../store';
const Navbar = styled.nav`
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

function Header({userInfo, loginState, logout}) {
  console.log(loginState);
  const [isOpen, setIsOpen] = useState(false);
  const clickLoginButton = () => {
    setIsOpen(!isOpen);
  };
  const clickLogoutBtn = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/logout`)
    .then((resp) => {
      logout()
    })
  }
  const controlClose = (val) => {
    setIsOpen(val);
  };
  return (
    <header>
      <Navbar>
        <Logo>
          <Link to="/">
            <FontAwesomeIcon icon={faBook} size="4x"></FontAwesomeIcon>
          </Link>
        </Logo>
        <Search>
          <input placeholder="가게이름을 입력하세요."></input>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </Search>
        <Menu>
          {loginState ? (
            <>
            <div>환영합니다 {userInfo.user_name}님</div>
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
          <Link to="/Mypage">
            <Mypagebutton>마이페이지</Mypagebutton>
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
    loginState: state.loginState.userLoginState
  };
}
function mapDispatchToProps(dispatch) {
    return {logout: () => {
      dispatch(getUserLogout());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
