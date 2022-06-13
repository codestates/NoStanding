import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
const H2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
function SideBar({ userInfo }) {
  return (
    <Container>
      {userInfo.is_master === 0 || null ? (
        <div>
          <Flex grow={3}>
            <UserImg src="img/test2.png" />
            <div>{userInfo.user_name}</div>
            <div>일반회원</div>
          </Flex>
          <Flex grow={7}>
            <div>
              <H2>예약</H2>
              <Link to="reservation">
                <div>예약내역</div>
              </Link>
              <Link to="review">
                <div>내가 쓴 후기</div>
              </Link>
            </div>
            <div>
              <H2>즐겨찾기</H2>
              <Link to='bookmark'>
                <div>즐겨찾기</div>
              </Link>
            </div>
            <div>
              <H2>알림</H2>
              <Link to="notification">
                <div>알림</div>
              </Link>
            </div>
            <div>
              <H2>내 정보</H2>
              <Link to="userinfo">
                <div>회원 정보 수정</div>
              </Link>
              <Link to="userdelete">
                <div>회원 탈퇴</div>
              </Link>
            </div>
          </Flex>
        </div>
      ) : (
        <div>
          <Flex grow={3}>
            <UserImg src="img/test2.png" />
            <div>{userInfo.user_name}</div>
            <div>점주회원</div>
          </Flex>
          <Flex grow={7}>
            <div>
              <H2>예약</H2>
              <Link to="masterreservation">
                <div>예약현황</div>
              </Link>
              <Link to="masterreview">
                <div>내 가게 후기</div>
              </Link>
            </div>
            <div>
              <H2>알림</H2>
              <Link to="masternotification">
                <div>알림</div>
              </Link>
            </div>
            <div>
              <H2>내 정보</H2>
              <Link to="mastermanagement">
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
        </div>
      )}
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(SideBar);
