import React, { useState } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
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
function UserInfo({user}) {
  const [password, setPassword] = useState('')
  const [changePwd, setChangePwd] = useState('')
  const [ckeckChangePwd, setChengeCheckPwd] = useState('')
  const [nickname, setNickname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  return (
    <Container>
      <Div>
        <H2>내 정보 수정</H2>
      </Div>
      <Flex direction="column">
        <form>
        <Flex direction="row">
          <Img src="img/test2.png" />
          <Flex direction="column">
            <Flex direction="row">
              <div>아이디 : </div>
              <input type="text" value={user.user_name} disabled/>
            </Flex>
            <Flex direction="row">
              <div>패스워드 :</div>
              <input type="text" value={password} />
            </Flex>
            <Flex direction="row">
              <div>변경할 패스워드 :</div>
              <input type="text" value={changePwd}/>
            </Flex>
            <Flex direction="row">
              <div>변경할 패스워드 확인 :</div>
              <input type="text" value={ckeckChangePwd} />
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="row">
          <div>닉네임 변경하기 :</div>
          <input type="text" defaultValue={user.nickname}/>
        </Flex>
        <Flex direction="row">
          <div>핸드폰 번호 변경 :</div>
          <input type="text" defaultValue={user.phone_number} />
        </Flex>
        <Flex direction="row">
          <div>이메일 :</div>
          <input type="text" defaultValue={user.email} />
        </Flex>
        <button>수정하기</button>
        </form>
      </Flex>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    user: state.loginInfo.userInfo,
  }
}
export default connect(mapStateToProps) (UserInfo);
