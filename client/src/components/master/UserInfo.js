import React from 'react';
import styled from 'styled-components';
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
function UserInfo() {
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
              <input type="text" />
            </Flex>
            <Flex direction="row">
              <div>패스워드 :</div>
              <input type="text" />
            </Flex>
            <Flex direction="row">
              <div>패스워드 확인 :</div>
              <input type="text" />
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="row">
          <div>닉네임(변경불가) :</div>
          <input type="text" />
        </Flex>
        <Flex direction="row">
          <div>가게이름 :</div>
          <input type="text" />
        </Flex>
        <Flex direction="row">
          <div>가게 주소 :</div>
          <input type="text" />
        </Flex>
        <Flex direction="row">
          <div>핸드폰 번호 인증 :</div>
          <input type="text" />
        </Flex>
        <Flex direction="row">
          <div>이메일(중복확인) :</div>
          <input type="text" />
        </Flex>
        <button>수정하기</button>
      </Flex>
    </Container>
  );
}

export default UserInfo;