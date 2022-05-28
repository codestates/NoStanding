import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook,faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {fa0} from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'

const Navbar = styled.nav`
   background-color: aqua;

`
const Logo =styled.div`

`

const Menu =styled.div`

`
const Search = styled.input`

`
function Header() {
  return(
    <header>
      <Navbar> 
        <Logo>
          <a href=''><FontAwesomeIcon icon={faBook} size='4x'></FontAwesomeIcon></a>
        </Logo>
        <Menu>
          
        </Menu>
      </Navbar>
        
    </header>
  )
}

export default Header