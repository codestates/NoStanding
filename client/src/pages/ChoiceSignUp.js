import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20em;  
`;
const H2 = styled.h2`
  height: 25vh;
  border: 2px solid black;
`
function ChoiceSignUp() {
  return (
    <Container>
      <H2>일반 회원</H2>
      <H2>점주 회원</H2>
    </Container>
  );
}

export default ChoiceSignUp;
