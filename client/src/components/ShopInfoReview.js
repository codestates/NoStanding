import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  height: auto;
`
const ContentDiv = styled.div`
  font-size: 16px;
`
const DateDiv = styled.div`
  font-size: 13px;
  color: #B8B8B8;
  margin-bottom: 10px;
`
const ScoreDiv = styled.div`
align-self: flex-end;
font-weight: bold;
`
function ShopInfoReview({review}) {
  const userName = review.user.user_name;
  const date = review.createdAt.split('T')[0]
  return (
    <Container>
      <div>{userName}</div>
    <DateDiv>{date}</DateDiv>
    <ContentDiv>{review.contents}</ContentDiv>
    <ScoreDiv>{review.score}</ScoreDiv>
    </Container>
  )
}

export default ShopInfoReview;