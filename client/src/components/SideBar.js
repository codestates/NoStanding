import React from 'react';
import { Link } from 'react-router-dom';
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
      {/* 일반회원 */}
      <Flex grow={3}>
        <UserImg src="img/test2.png" />
        <div>닉네임</div>
        <div>일반회원</div>
      </Flex>
      <Flex grow={7}>
        <div>
          <h2>예약</h2>
          <Link to="reservation">
            <div>예약내역</div>
          </Link>
          <Link to="review">
            <div>내가 쓴 후기</div>
          </Link>
        </div>
        <div>
          <h2>알림</h2>
          <Link to="notification">
            <div>알림</div>
          </Link>
        </div>
        <div>
          <h2>내 정보</h2>
          <Link to="userinfo">
            <div>회원 정보 수정</div>
          </Link>
          <Link to="userdelete">
            <div>회원 탈퇴</div>
          </Link>
        </div>
      </Flex>
      {/* 점주 */}
      <Flex grow={3}>
        <UserImg src="img/test2.png" />
        <div>닉네임</div>
        <div>점주회원</div>
      </Flex>
      <Flex grow={7}>
        <div>
          <h2>예약</h2>
          <Link to="masterreservation">
            <div>예약현황</div>
          </Link>
          <Link to="masterreview">
            <div>내 가게 후기</div>
          </Link>
        </div>
        <div>
          <h2>알림</h2>
          <Link to="masternotification">
            <div>알림</div>
          </Link>
        </div>
        <div>
          <h2>내 정보</h2>
          <Link to="masterreservation">
            <div>내 가게 관리</div>
          </Link>
          <Link to="masteruserinfo">
            <div>회원 정보 수정</div>
          </Link>
          <Link to="userdelete">
            <div>회원 탈퇴</div>
          </Link>
        </div>
      </Flex>
    </Container>
  );
}

export default SideBar;
