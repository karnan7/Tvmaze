import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Nav>
       <Link to='/'><Logo src='https://static.tvmaze.com/images/tvm-header-logo.png'/></Link>
       <Login>Login</Login>
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    height: 90px;
    background: #090b13;
    color: #fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
`
const Logo = styled.img`
    width: 130px;
`
const Login = styled.button`
    border: 2px solid #fff;
    border-radius:10px;
    background-color: transparent;
    color: #f5f5f5;
    padding: 10px 20px;
    font-size:18px;
    letter-spacing:3px;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: rgb(24, 30, 52);
    }
`