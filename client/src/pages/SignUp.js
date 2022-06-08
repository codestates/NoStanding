import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Post from "../components/Post";
import PopupDom from "../components/PopupDom";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1em;
  border: 2px solid black;
`;
const ChooseDiv = styled.div`
  margin-top: 2em;
  border: 2px solid black;
  font-size: 25px;
  font-weight: bold;
  width: 5em;
  text-align: center;
`;
const Container = styled.div`
  border: 2px solid black;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;
const Img = styled.img`
  width: 10em;
  height: 10em;
  margin: 1em;
`;
const Button = styled.button`
  margin: 1em;
  width: 10em;
  height: 4em;
`;
const MessageDiv = styled.div`
  margin-left: 10px;
  color: red;
  font-weight: bold;
`;
const RegExp = /^[a-zA-Z0-9]{4,12}$/;
const nicknameRegExp = /^[가-힣a-zA-Z0-9]{2,10}$/;
// const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
//!주석 풀면 비밀번호 유효성검사 가능

function SingUp() {
  const [address, setAddress] = useState("");
  const [popup, setPopup] = useState(false);
  const [isMaster, setIsMaster] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopCategory, setShopCategory] = useState("");
  const [shopCategoryCity, setShopCategoryCity] = useState("");
  const [email, setEmail] = useState("");
  const [onId, setOnId] = useState(true);
  const [onNickname, setOnNickname] = useState(true);
  const [checkEmail, setCheckEmail] = useState(false);
  const [confirmNum, setConfirmNum] = useState('')
  const [userConfirmNum, setUserConfirmNum] = useState('')
  const [emailCheckOK, setemailcheckOK] = useState(false)
  // const [onPwd, setOnPwd] = useState(true);
  //!주석 풀면 비밀번호 유효성 검사 가능
  const [onCheckPwd, setOnCheckPwd] = useState(true);
  const category = ["음식", "카페", "미용"];
  const categoryCity = [
    "서울",
    "부산",
    "인천",
    "대구",
    "부산",
    "광주",
    "대전",
    "울산",
    "제주",
  ];
  const clickChooseBtn = (value) => {
    setIsMaster(value);
  };
  const submitCheckEmail = (e) => {
    e.preventDefault();
    setCheckEmail(true);
    // axios.post(`${process.env.REACT_APP_API_URL}/sendemailcheck`, {
    //   email: email,
    // }).then((resp) => console.log(resp)) // setUserConfirmNum(resp.data....)
  };
  const submitConfirmNum = (e) => {
    e.preventDefault();
    //if(confirmNum === userConfirmNum) {
    // emailCheckOK(true)
    //alert('인증 완료')
    //setCheckEmail(false)}
    //else {alert('인증번호가 맞지 않습니다.')}
  }
  const inputUserName = (e) => {
    setUserName(e.target.value);
    if (RegExp.test(e.target.value)) {
      setOnId(true);
    } else {
      setOnId(false);
    }
  };
  const inputPwd = (e) => {
    setPassword(e.target.value);
    // passwordRegex.test(e.target.value) ? setOnPwd(true) : setOnPwd(false);
    //!주석 풀면 비밀번호 유효성 검사 가능
  };
  const inputCheckPwd = (e) => {
    setCheckPassword(e.target.value);
    password === e.target.value ? setOnCheckPwd(true) : setOnCheckPwd(false);
  };
  const inputNickname = (e) => {
    setNickname(e.target.value);
    nicknameRegExp.test(e.target.value)
      ? setOnNickname(true)
      : setOnNickname(false);
  };
  const inputPhoneNum = (e) => setPhoneNumber(e.target.value);
  const inputShopName = (e) => setShopName(e.target.value);
  const inputShopCategory = (e) => setShopCategory(e.target.value);
  const inputShopCategoryCity = (e) => setShopCategoryCity(e.target.value);
  const inputEmail = (e) => setEmail(e.target.value);
  const inputConfirmNum = (e) => setUserConfirmNum(e.target.value)

  const clickSignUpBtn = () => {
    if (onId && onNickname /*&& onPwd */ && onCheckPwd) {
      console.log("되고있니");
      //!주석 풀면 비밀번호 유효성 검사 가능
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/signup`,
          isMaster
            ? {
                user_name: userName,
                password: password,
                nickname: nickname,
                phone_number: phoneNumber,
                shop_name: shopName,
                shop_category: shopCategory,
                shop_category_city: shopCategoryCity,
                address_line1: address,
                email: email,
                is_master: true,
              }
            : {
                user_name: userName,
                password: password,
                nickname: nickname,
                phone_number: phoneNumber,
                email: email,
                is_master: false,
              }
        )
        .then((resp) => {
          console.log(resp);
          setUserName("");
          setPassword("");
          setCheckPassword("");
          setNickname("");
          setPhoneNumber("");
          setShopName("");
          setShopCategory("none");
          setShopCategoryCity("none");
          setAddress("");
          setEmail("");
          alert("회원가입 완료");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert("회원가입 정보가 충족되지 않았습니다.");
    }
  };

  return (
    <Container>
      <FlexRow>
        <ChooseDiv onClick={(e) => clickChooseBtn(false)}>고객회원</ChooseDiv>
        <ChooseDiv onClick={(e) => clickChooseBtn(true)}>점주회원</ChooseDiv>
      </FlexRow>
      <FlexCol>
        <FlexRow>
          <Img src="img/test2.png"></Img>
          <FlexCol>
            <FlexRow>
              <div value={userName}>아이디 : </div>
              <input type="text" onChange={inputUserName} value={userName} />
              {onId ? null : (
                <MessageDiv>
                  아이디는 영문자, 숫자로 된 4~12 길이입니다.
                </MessageDiv>
              )}
            </FlexRow>
            <FlexRow>
              <div value={password}>패스워드 : </div>
              <input type="password" onChange={inputPwd} value={password} />
              {/* {onPwd ? null : (
                <MessageDiv>
                  비밀번호는 영문자, 숫자, 특수문자가 포함된 8자 이상입니다.
                </MessageDiv>
              )} 
              !주석 풀면 비밀번호 유효성 검사 가능
              */}
            </FlexRow>
            <FlexRow>
              <div value={checkPassword}>패스워드 확인 : </div>
              <input
                type="password"
                onChange={inputCheckPwd}
                value={checkPassword}
              />
              {onCheckPwd ? null : (
                <MessageDiv>비밀번호가 맞지 않습니다.</MessageDiv>
              )}
            </FlexRow>
          </FlexCol>
        </FlexRow>
        <FlexRow>
          <div value={nickname}>닉네임 : </div>
          <input type="text" onChange={inputNickname} value={nickname} />
          {onNickname ? null : (
            <MessageDiv>
              닉네임은 영문자, 한글, 숫자로 된 2~10 길이만 가능합니다
            </MessageDiv>
          )}
        </FlexRow>
        {isMaster ? (
          <>
            <FlexRow>
              <div value={shopName}>가게이름(점주) : </div>
              <input type="text" onChange={inputShopName} value={shopName} />
            </FlexRow>
            <FlexRow>
              <div>가게 위치(점주) : </div>
              <select onChange={inputShopCategoryCity}>
                <option value="none">=== 선택 ===</option>
                {categoryCity.map((locate, idx) => {
                  return <option key={idx}>{locate}</option>;
                })}
              </select>
            </FlexRow>
            <FlexRow>
              <div>업종(점주) : </div>
              <select onChange={inputShopCategory}>
                <option value="none">=== 선택 ===</option>
                {category.map((category, idx) => {
                  return <option key={idx}>{category}</option>;
                })}
              </select>
            </FlexRow>
            <FlexRow>
              <div value={address}>주소지(점주) : </div>
              <input
                type="text"
                onChange={(e) => setAddress(e)}
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
            </FlexRow>
          </>
        ) : null}
          <FlexRow>
          <div value={phoneNumber}>핸드폰 번호(인증) : </div>
          <input type="text" onChange={inputPhoneNum} value={phoneNumber} />
        </FlexRow>
        <FlexRow>
          <div value={email}>이메일 중복확인 : </div>
          <form onSubmit={submitCheckEmail}>
            <input type="text" onChange={inputEmail} value={email} />
            <button>인증 메일 보내기</button>
          </form>
          {checkEmail ? (
              <form onSubmit={submitConfirmNum}>
                <input type="text" placeholder="인증번호를 입력하세요" value={userConfirmNum} onChange={inputConfirmNum} />
                <button>인증하기</button>
              </form>
          ) : null}
        </FlexRow>
        <Button onClick={clickSignUpBtn}>가입하기</Button>
      </FlexCol>
    </Container>
  );
}

export default SingUp;
