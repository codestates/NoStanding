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
function Alarm() {
  return (
    <Container>
      <Div>
        <H2>알림</H2>
      </Div>
      <Div>메세지</Div>
    </Container>
  );
}
export default Alarm;
