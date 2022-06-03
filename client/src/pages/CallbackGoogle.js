import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import store, { getUserInfo, getUserLogin } from "../store";

function CallbackGoogle({ getUserLogin, getUserInfo }) {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get("code");
  useEffect(() => {
    callbackCheck();
  }, [authorizationCode]);

  const callbackCheck = async () => {
    try {
      if (authorizationCode) {
        const response = await axios
          .post(
            `${process.env.REACT_APP_API_URL}/oauth/google`,
            { authorizationCode },
            { withCredentials: true }
          )
          .then((resp) => {
            const userInfo = resp.data.data.userInfo;
            console.log(resp); // getUserInfo(response)
            getUserLogin();
            getUserInfo(userInfo);
            alert("구글로그인성공");
            navigate("/");
          });
      }
      console.log(store.getState());
    } catch (err) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (authorizationCode) {
      callbackCheck();
    }
  }, [authorizationCode]);

  return <div>구글로그인</div>;
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLogin: () => {
      dispatch(getUserLogin());
    },
    getUserInfo: (userInfo) => {
      dispatch(getUserInfo(userInfo));
    },
  };
}
export default connect(null, mapDispatchToProps)(CallbackGoogle);
