import React from 'react';
import styled from 'styled-components';
import ReviewInfo from './ReviewInfo';

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

function Review() {
  return (
    <Container>
      <Div>
        <H2>내가 쓴 후기</H2>
      </Div>
      <div>
        <ReviewInfo />
      </div>
    </Container>
  );
}

export default Review;
