import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./ManagementRoute/Menu";
import Photo from "./ManagementRoute/Photo";
import Shopinfo from "./ManagementRoute/Shopinfo";
import { Link } from "react-router-dom";

const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 90vw;
`;
const H2 = styled.h2`
  margin: 1em;
`;
const Div = styled.div`
  border-bottom: 2px solid black;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: row;
`;
const Menubar = styled.div`
  border: 2px solid black;
  width: 30vw;
  height: 5vw;
  text-align: center;
  padding: 2vw 0;
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
