import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 0px auto;
  h1 {
    color: rgba(68, 68, 68, 0.8);
    margin: 1rem;
    align-self: flex-start;
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
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
const ChooseDiv = styled.div`
  margin-top: 1rem;
  border: 1px solid rgb(231, 231, 231);
  font-size: 15px;
  font-weight: 550;
  height: auto;
  padding: 12px;
  width: 12rem;
  text-align: center;
  margin-bottom: 3rem;
  flex-grow: 1;
  color: ${(props) => (props.backgroundOn ? "white" : "black")};
  background-color: ${(props) => (props.backgroundOn ? "rgb(21,64,99)" : null)};
`;
const Input = styled.input`
  width: 100%;
  height: 6vh;
  font-size: 15px;
  margin-bottom: 10px;
`;
const TagDiv = styled.div`
  align-self: start;
  margin: 4px;
  font-size: 15px;
  font-weight: 600;
`;
const MessageDiv = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  height: 6vh;
`;
const CheckInput = styled.input`
  width: 67%;
  height: 6vh;
  font-size: 15px;
  margin-right: 3%;
`;
const CheckBtn = styled.button`
  height: 6vh;
  width: 30%;
  border-radius: 0.3rem;
  background-color: rgb(21, 64, 99);
  color: white;
  &[disabled] {
    cursor: revert;
    transform: revert;
    background-color: rgb(65, 65, 65);
  }
`;
const Button = styled.button`
  margin: 1em;
  width: 10em;
  height: 4em;
  background-color: rgb(21, 64, 99);
  color: white;
  border-radius: 0.5rem;
`;
const Select = styled.select`
  width: 100%;
  height: 5vh;
  text-align: center;
`;
const RegExp = /^[a-zA-Z0-9]{4,12}$/;
const nicknameRegExp = /^[???-???a-zA-Z0-9]{2,10}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
//!?????? ?????? ???????????? ??????????????? ??????

function SingUp() {
  const [address, setAddress] = useState("");
  const [addressLine, setAddressLine] = useState("");
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
  const [confirmNum, setConfirmNum] = useState("");
  const [userConfirmNum, setUserConfirmNum] = useState("");
  const [emailCheckOK, setEmailcheckOK] = useState(false);
  const [onPwd, setOnPwd] = useState(true);
  //!?????? ?????? ???????????? ????????? ?????? ??????
  const [onCheckPwd, setOnCheckPwd] = useState(true);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();
  const category = ["??????", "??????"];
  const categoryCity = [
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
  ];
  const clickChooseBtn = (value) => {
    setIsMaster(value);
  };

  const submitCheckEmail = (e) => {
    e.preventDefault();
    if (email !== "") {
      setMinutes(2);
      setSeconds(59);
      setCheckEmail(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/emailcheck`, {
          email: email,
        })
        .then((resp) => {
          setCheckEmail(true);
          setConfirmNum(resp.data.data);
        })
        .catch((err) => {
          setCheckEmail(false);
          alert(err.response.data.message);
        });
    } else {
      alert("???????????? ??????????????????");
      setCheckEmail(false);
    }
  };

  const submitConfirmNum = (e) => {
    e.preventDefault();
    if (Number(confirmNum) === Number(userConfirmNum)) {
      setEmailcheckOK(true);
      alert("?????? ??????");
      setCheckEmail(false);
    } else {
      alert("??????????????? ?????? ????????????.");
    }
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
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
    passwordRegex.test(e.target.value) ? setOnPwd(true) : setOnPwd(false);
    //!?????? ?????? ???????????? ????????? ?????? ??????
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
  const inputConfirmNum = (e) => setUserConfirmNum(e.target.value);

  const clickSignUpBtn = () => {
    console.log(checkEmail);
    if (onId && onNickname && onPwd && onCheckPwd && emailCheckOK) {
      //!?????? ?????? ???????????? ????????? ?????? ??????
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
                address_line1: address.address,
                address_line2: addressLine,
                email: email,
                email_key: "success",
                is_master: true,
              }
            : {
                user_name: userName,
                password: password,
                nickname: nickname,
                phone_number: phoneNumber,
                email: email,
                email_key: "success",
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
          alert("???????????? ??????");
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert("???????????? ????????? ???????????? ???????????????.");
    }
  };
  return (
    <Container>
      <h1>????????????</h1>
      <FlexRow>
        <ChooseDiv
          backgroundOn={!isMaster}
          onClick={(e) => clickChooseBtn(false)}
        >
          ?????? ??????
        </ChooseDiv>
        <ChooseDiv
          backgroundOn={isMaster}
          onClick={(e) => clickChooseBtn(true)}
        >
          ?????? ??????
        </ChooseDiv>
      </FlexRow>
      <FlexCol>
        <FlexCol>
          <TagDiv value={userName}>* ?????????</TagDiv>
          <Input
            type="text"
            onChange={inputUserName}
            value={userName}
            placeholder="???????????? ???????????????."
          />
          {onId ? null : (
            <MessageDiv>???????????? ?????????, ????????? ??? 4~12 ???????????????.</MessageDiv>
          )}
        </FlexCol>
        <FlexCol>
          <TagDiv value={password}>* ????????????</TagDiv>
          <Input
            type="password"
            onChange={inputPwd}
            value={password}
            placeholder="******"
          />
          {onPwd ? null : (
            <MessageDiv>
              ??????????????? ?????????, ??????, ??????????????? ????????? 8??? ???????????????.
            </MessageDiv>
          )}
        </FlexCol>
        <FlexCol>
          <TagDiv value={checkPassword}>* ???????????? ??????</TagDiv>
          <Input
            type="password"
            onChange={inputCheckPwd}
            value={checkPassword}
            placeholder="******"
          />
          {onCheckPwd ? null : (
            <MessageDiv>??????????????? ?????? ????????????.</MessageDiv>
          )}
        </FlexCol>
        <FlexCol>
          <TagDiv value={nickname}> ?????????</TagDiv>
          <Input
            type="text"
            onChange={inputNickname}
            value={nickname}
            placeholder="???????????? ???????????????."
          />
          {onNickname ? null : (
            <MessageDiv>
              ???????????? ?????????, ??????, ????????? ??? 2~10 ????????? ???????????????
            </MessageDiv>
          )}
        </FlexCol>
        {isMaster ? (
          <>
            <FlexCol>
              <TagDiv value={shopName}>* ????????????</TagDiv>
              <Input type="text" onChange={inputShopName} value={shopName} />
            </FlexCol>
            <FlexCol>
              <TagDiv>* ?????? ??????</TagDiv>
              <Select onChange={inputShopCategoryCity}>
                <option value="none">====== ?????? ======</option>
                {categoryCity.map((locate, idx) => {
                  return <option key={idx}>{locate}</option>;
                })}
              </Select>
            </FlexCol>
            <FlexCol>
              <TagDiv>* ??????</TagDiv>
              <Select onChange={inputShopCategory}>
                <option value="none">====== ?????? ======</option>
                {category.map((category, idx) => {
                  return <option key={idx}>{category}</option>;
                })}
              </Select>
            </FlexCol>
            <FlexCol>
              <TagDiv value={address}>* ?????????</TagDiv>
              <FlexRow>
                <CheckInput
                  type="text"
                  placeholder="????????????"
                  value={address.zonecode}
                  disabled
                />
                <CheckBtn
                  onClick={() => {
                    setPopup(!popup);
                  }}
                >
                  ????????????
                </CheckBtn>
              </FlexRow>
              <Input
                type="text"
                value={address.address}
                placeholder="??????"
                disabled
              />
              <Input
                type="text"
                placeholder="????????????"
                value={addressLine}
                onChange={(e) => setAddressLine(e.target.value)}
              />
              {popup ? (
                <Post setAddress={setAddress} setPopup={setPopup}></Post>
              ) : null}
            </FlexCol>
          </>
        ) : null}
        <FlexCol>
          <TagDiv value={phoneNumber}>????????? ??????</TagDiv>
          <Input
            type="text"
            onChange={inputPhoneNum}
            value={phoneNumber}
            placeholder="010-****-****"
          />
        </FlexCol>
        <FlexCol>
          <TagDiv value={email}>* ????????? ????????????</TagDiv>
          <Form onSubmit={submitCheckEmail}>
            <FlexRow>
              <CheckInput
                type="text"
                onChange={inputEmail}
                value={email}
                placeholder="???????????? ???????????????."
              />
              <CheckBtn disabled={checkEmail}>????????????</CheckBtn>
            </FlexRow>
          </Form>
        </FlexCol>
        <FlexCol>
          {checkEmail ? (
            <Form onSubmit={submitConfirmNum}>
              <FlexRow>
                <CheckInput
                  type="text"
                  placeholder="??????????????? ???????????????"
                  value={userConfirmNum}
                  onChange={inputConfirmNum}
                />
                <CheckBtn>????????????</CheckBtn>
              </FlexRow>
              <div>
                ?????? ???????????? {minutes}:{seconds}
              </div>
            </Form>
          ) : null}
        </FlexCol>
        <Button onClick={clickSignUpBtn}>????????????</Button>
      </FlexCol>
    </Container>
  );
}

export default SingUp;
