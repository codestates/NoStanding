import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import axios from 'axios';
import store, { getUserInfo, getUserLogin } from '../store';
import { connect } from 'react-redux';

const RowDiv = styled.div`
  margin: 5px;
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: ${(props) => (props.primary ? 'none' : 'space-around')};
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Logoimage = styled.img`
  margin: 10px;
  width: 30vh;
  height: 16vh;
`;
const OauthLogin = styled.div`
  margin: 4px;
  height: 4vh;
  width: 33vw;
  background-color: ${(props) =>
    props.primary === '1'
      ? 'yellow'
      : props.primary === '2'
      ? 'green'
      : props.primary === '0'
      ? 'black'
      : 'tomato'};
  color: ${(props) =>
    props.primary === '1'
      ? 'black'
      : props.primary === '2'
      ? 'black'
      : props.primary === '0'
      ? 'white'
      : 'black'};
  text-align: center;
  flex: auto;
  padding-top: 20px;
  border-radius: 10px;
`;

const Xbutton = styled.button`
  height: 1vw;
  width: 1vw;
  float: right;
  text-align: right;
  align-items: center;
  padding: 3px;
`;
const Input = styled.input`
  height: 1vw;
  width: 12vw;
`;

const A = styled.a`
  text-align: center;
  align-items: center;
  padding: 5px;
  width: 60%;
`;

function LoginModal({ controlClose, getUserInfo, getUserLogin }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIslogin] = useState(false);

  const idSetter = (e) => {
    setId(e.target.value);
  };
  const passwordSetter = (e) => {
    setPassword(e.target.value);
  };
  const clearForm = () => {
    setId('');
    setPassword('');
  };
  const loginHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          user_name: id,
          password: password,
        },
        {
          withCredentials: true,
        }
      )

      .then((resp) => {
        const userInfo = resp.data.data.userInfo;
        getUserInfo(userInfo);
        setIslogin(true);
        getUserLogin();
      })
      .catch((err) => {
        console.log('err\n', err.response);
        alert(err.response.data.message);
      });
    clearForm();
  };
  const clickOauthBtn = (val) => {
    const url = process.env.REACT_APP_CLI_URL;
    if (val === 'kakao') {
      window.location.assign(
        `https://kauth.kakao.com/oauth/authorize?client_id=42009e870cdf666e6d0d8ae29350f9cb&redirect_uri=http://localhost:3000/callbackkakao&response_type=code&scope=account_email`
      );
    } else if (val === 'google') {
      window.location.assign(
        `https://accounts.google.com/o/oauth2/auth?client_id=136738573059-qo57hsrstcie7fu7btivdccae2bbtkpk.apps.googleusercontent.com&redirect_uri=http://localhost:3000/callbackgoogle&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid`,
      )
    }
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isLogin ? false : true}
      onRequestClose={() => controlClose(false)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '40px',
          left: '29%',
          right: '32%',
          bottom: '30%',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      <Xbutton onClick={() => controlClose(false)}>X</Xbutton>
      <ColumnDiv>
        <Logoimage src="img/nostandinglogo2.jpeg"></Logoimage>
        <RowDiv>
          <ColumnDiv>
            <div>아이디</div>
            <div>비밀번호</div>
          </ColumnDiv>
          <ColumnDiv>
            <Input
              type="text"
              placeholder="아이디를 입력하세요"
              onChange={(e) => idSetter(e)}
              value={id}
            ></Input>
            <Input
              type="password"
              onChange={(e) => passwordSetter(e)}
              value={password}
            ></Input>
          </ColumnDiv>
        </RowDiv>
        <RowDiv>
          <RowDiv primary>
            <input type="checkbox"></input>
            <div>로그인 유지하기</div>
          </RowDiv>
          <A>아이디/비밀번호 찾기</A>
        </RowDiv>
        <OauthLogin primary="0" onClick={loginHandler}>
          로그인
        </OauthLogin>
        <OauthLogin onClick={() => clickOauthBtn('kakao')} primary="1">
          카카오톡 로그인
        </OauthLogin>
        <OauthLogin onClick={() => clickOauthBtn('google')}>
          구글 로그인
        </OauthLogin>
      </ColumnDiv>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (userInfo) => {
      dispatch(getUserInfo(userInfo));
    },
    getUserLogin: () => {
      dispatch(getUserLogin());
    },
  };
};
export default connect(null, mapDispatchToProps)(LoginModal);
