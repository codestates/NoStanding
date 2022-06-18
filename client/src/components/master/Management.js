import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./ManagementRoute/Menu";
import Photo from "./ManagementRoute/Photo";
import Shopinfo from "./ManagementRoute/Shopinfo";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  h2 {
    margin: 1em;
  }
`;
const H2 = styled.h2`
  margin: 1em;
`;
const Div = styled.div``;
const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Menubar = styled.div`
  border: 2px solid rgb(21, 64, 99);
  width: 15vw;
  height: 5vw;
  margin: 1rem;
  border-radius: 10px;
  font-size: large;
  text-align: center;
  padding: 2vw 0;
  :hover {
    transform: scale(1.05);
    background-color: aqua;
  }
`;

function Management() {
  return (
    <>
      <Container>
        <Div>
          <H2>내 가게 관리</H2>
        </Div>
        <Div2>
          <Link to="Menu">
            <Menubar>메뉴</Menubar>
          </Link>
          <Link to="Photo">
            <Menubar>사진</Menubar>
          </Link>
          <Link to="Shopinfo">
            <Menubar>가게정보</Menubar>
          </Link>
        </Div2>
        <Routes>
          <Route exact path="Menu" element={<Menu />}></Route>
          <Route path="Photo" element={<Photo />}></Route>
          <Route path="Shopinfo" element={<Shopinfo />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default Management;
