import React from "react";
import Alarm from "../Alarm";
import styled from "styled-components";

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

function Notification() {
  return (
    <>
      <Container>
        <Div>
          <H2>알림</H2>
        </Div>
        <Alarm />
      </Container>
    </>
  );
}

export default Notification;
