import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook,faAddressCard,faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons'
import {fa0} from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Login from './Login.js'
import axios from 'axios';
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
const Mypagebutton = styled.button`
  
`
function Header() {
  const [isOpen, setIsOpen] =useState(false)
  const clickButton=()=>{
    setIsOpen(!isOpen)
  }
  const controlClose = (val) => {
    setIsOpen(val)
  }
  return(
    <header>
      <Navbar> 
        <Logo>
          <Link to ='/'><FontAwesomeIcon icon={faBook} size='4x'></FontAwesomeIcon></Link>
        </Logo>
        <Search >
          <input placeholder='가게이름을 입력하세요.'></input>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </Search>
        <Menu>
          <button onClick={clickButton}>로그인</button>
          {isOpen ? <Login controlClose={controlClose}/>
                  :null
          }
          <Link to='/Signup'>
          <button>회원가입</button>
          </Link>
          <Link to='/Mypage'>
            <Mypagebutton>마이페이지</Mypagebutton>
          </Link>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </Menu>
      </Navbar>  
    </header>
  )
}

export default Header