/* eslint-disable no-use-before-define */
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { getUserInfo, getUserLogin } from '../store';

// eslint-disable-next-line no-shadow
function CallbackKakao(getUserLogin, getUserInfo) {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get('code');
  useEffect(() => {
    if (authorizationCode) {
      callbackCheck();
    }
  }, [authorizationCode]);

  const callbackCheck = async () => {
    try {
      if (authorizationCode) {
        const response = await axios
          .post(
            `${process.env.REACT_APP_API_URL}/oauth/kakao`,
            { authorizationCode },
            { withCredentials: true },
          )
        getUserLogin()
         // getUserInfo(response)
        navigate('/');
      }
      console.log(store.getState());
    } catch (err) {
      navigate('/');
    }
  };
  return <div>카카오로그인</div>;
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLogin: () => {
      dispatch(getUserLogin());
    },
    getUserInfo: () => {
      dispatch(getUserInfo());
    },
  };
}
export default connect(null, mapDispatchToProps)(CallbackKakao);
