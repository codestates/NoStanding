import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook,faAddressCard,faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons'
import {fa0} from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'

const Navbar = styled.nav`
   background-color: aqua;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`
const Logo =styled.div`

`

const Menu =styled.div`
  display:flex;
  flex-direction: row;
`
const Search = styled.div`
   height:30%;
   
   align-items: center;
   justify-content: center;
`
function Header() {
  return(
    <header>
      <Navbar> 
        <Logo>
          <a href=''><FontAwesomeIcon icon={faBook} size='4x'></FontAwesomeIcon></a>
        </Logo>
        <Search >
          <input defaultValue='가게이름을 입력하세요'></input>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </Search>
        <Menu>
          <button>로그인</button>
          <button>회원가입</button>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </Menu>
      </Navbar>
        
    </header>
  )
}

export default Header