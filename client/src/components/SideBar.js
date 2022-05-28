import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50em;
  border: 2px solid red;
`;
const Flex = styled.div`
  flex: ${(props) => props.grow} 1 0;
  border: 2px solid black;
`;
const UserImg = styled.img`
  width: 8em;
  height: 8em;
  margin: 1em;
`;
function SideBar() {
  return (
    <Container>
      <Flex grow={3}>
        <UserImg src="img/test2.png" />
        <div>닉네임</div>
        <div>일반회원</div>
      </Flex>
      <Flex grow={7}>
        <div>
          <h2>예약</h2>
          <div>예약내역</div>
          <div>내가 쓴 후기</div>
        </div>
        <div>
          <h2>알림</h2>
          <div>알림</div>
        </div>
        <div>
          <h2>내 정보</h2>
          <div>회원 정보 수정</div>
          <div>회원 탈퇴</div>
        </div>
      </Flex>
    </Container>
  );
}

export default SideBar;
