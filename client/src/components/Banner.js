import React from 'react';
import styled from 'styled-components';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  background-image: url(${(props) => props.img});
  background-size: 100% 25vh;
  width: 100%;
  height: 26vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Arrows = styled.div`
  margin: 5em;
  opacity: 0.6;
`;

function Banner() {
  return (
    <>
      <Container img={'img/test.jpeg'}>
        <Arrows>
          <FontAwesomeIcon icon={faAngleLeft} size="3x" />
        </Arrows>
        <Arrows>
          <FontAwesomeIcon icon={faAngleRight} size="3x" />
        </Arrows>
      </Container>
    </>
  );
}
export default Banner;
