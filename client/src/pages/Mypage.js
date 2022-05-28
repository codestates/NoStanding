import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
const Container = styled.div`
  display: flex;
`
function Mypage() {
  return (
    <Container>
    <SideBar />
    <div>페이지</div>
    </Container>
  )
}

export default Mypage