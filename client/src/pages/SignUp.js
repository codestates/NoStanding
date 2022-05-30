import React from 'react';
import styled from 'styled-components';
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
  width: 5em;
`
function SingUp() {
  return (
    <Container>
      <FlexRow>
        <ChooseDiv>고객회원</ChooseDiv>
        <ChooseDiv>점주회원</ChooseDiv>
      </FlexRow>
      <FlexCol>
        <FlexRow>
          <Img src="img/test2.png"></Img>
          <FlexCol>
            <FlexRow>
              <div>아이디 : </div>
              <input type="text" />
            </FlexRow>
            <FlexRow>
              <div>패스워드 : </div>
              <input type="password" />
            </FlexRow>
            <FlexRow>
              <div>패스워드 확인 : </div>
              <input type="password" />
            </FlexRow>
          </FlexCol>
        </FlexRow>
        <FlexRow>
          <div>닉네임 : </div>
          <input type="text" />
        </FlexRow>
        <FlexRow>
          <div>가게이름(option) : </div>
          <input type="text" />
        </FlexRow>
        <FlexRow>
          <div>주소지(option) : </div>
          <input type="text" />
        </FlexRow>
        <FlexRow>
          <div>핸드폰 번호(인증) : </div>
          <input type="text" />
        </FlexRow>
        <FlexRow>
          <div>이메일 중복확인 : </div>
          <input type="text" />
        </FlexRow>
    <Button>가입하기</Button>
      </FlexCol>
    </Container>
  );
}

export default SingUp;
