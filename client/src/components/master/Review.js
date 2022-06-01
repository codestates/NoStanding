import React,{useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

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
const ReviewBox =styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid gray 2px;
`
const ReviwButton =styled.button`
  position: absolute;
  transform: translateX(3750%);
`
const Rereviewbox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid gray 2px;
`
function Review() {
  const [open,isOpen] = useState(false)
  const RereviewOpen = ()=>{
    isOpen(!open)
  }
   return (
    <Container>
      <Div>
        <H2>내 가게 후기</H2>
      </Div>
      <ReviewBox>
        <ReviwButton onClick={RereviewOpen}>답글</ReviwButton>
        <div>팡팡맨</div>
        <div>너무 맛있어요!! 다음에도 꼭 시킬게요</div>
        <div>2022.05.30</div>
      </ReviewBox>
      {open ? 
      <Rereviewbox>
        <FontAwesomeIcon icon={faArrowAltCircleRight}  />
        <div>업주1</div>
        <div>감사합니다 다음에도 이용해주세요</div>
        <div>2022.05.30</div>
      </Rereviewbox>:null}
      <ReviewBox>
        <ReviwButton >답글</ReviwButton>
        <div>팡팡맨</div>
        <div>너무 맛있어요!! 다음에도 꼭 시킬게요</div>
        <div>2022.05.30</div>
      </ReviewBox>
      <ReviewBox>
        <ReviwButton>답글</ReviwButton>
        <div>팡팡맨</div>
        <div>너무 맛있어요!! 다음에도 꼭 시킬게요</div>
        <div>2022.05.30</div>
      </ReviewBox>
      <ReviewBox>
        <ReviwButton>답글</ReviwButton>
        <div>팡팡맨</div>
        <div>너무 맛있어요!! 다음에도 꼭 시킬게요</div>
        <div>2022.05.30</div>
      </ReviewBox>
      <ReviewBox>
        <ReviwButton>답글</ReviwButton>
        <div>팡팡맨</div>
        <div>너무 맛있어요!! 다음에도 꼭 시킬게요</div>
        <div>2022.05.30</div>
      </ReviewBox>
    </Container>
     
   )
}

export default Review