import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import store, { getUserInfo, getUserLogin } from "../store/store";

function CallbackGoogle({ getUserLogin, getUserInfo }) {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  console.log(url);
  const authorizationCode = url.searchParams.get("code");
  console.log(authorizationCode);
  useEffect(() => {
    callbackCheck();
  }, [authorizationCode]);

  const callbackCheck = () => {
    try {
      if (authorizationCode) {
        const response = axios
          .post(
            `${process.env.REACT_APP_API_URL}/oauth/google`,
            { authorizationCode },
            { headers: { accept: "application/json" }, withCredentials: true }
          )
          .then((resp) => {
            const userInfo = resp.data.data.userInfo;
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
