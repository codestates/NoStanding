import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin: ${(props) => props.direction === 'column'? '5em': '1em'};
  align-items: center;
`;
function UserDelete() {
  return (
    <Flex direction="column">
      <Flex direction="row">
        <div>아이디:</div>
        <input type="text" />
      </Flex>
      <Flex direction="row">
        <div>비밀번호:</div>
        <input type="password" />
      </Flex>
      <Flex direction="row">
        <div>비밀번호 확인:</div>
        <input type="password" />
      </Flex>
      <button>탈퇴하기</button>
    </Flex>
  );
}

export default UserDelete;
