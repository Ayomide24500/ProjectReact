import React, { useState } from 'react'
import styled from "styled-components"
import { AiOutlineMail } from "react-icons/ai"
import { BiMenu, BiSearch } from "react-icons/bi"
import { Link } from 'react-router-dom'

const Header = () => {
    const [header, setHeader] = useState(false);

  const headerChange = () => {
    const scroll = window.pageYOffset;

    if (scroll >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", headerChange);
  return (
   <div>
       
      {header?( 
      <Container   bg="white" >
        <Wrapper>
          <Menu><BiMenu /></Menu>
          <Logo src='https://zozothemes.com/html/layer/demo/images/logo-dark.png' />
          
          <Navhold>
            <Navs cl="black">Home</Navs>
            <Navs cl="black">Features</Navs>
            <Navs cl="black">How it works</Navs>
            <Navs cl="black">Screenshots</Navs>
            <Navs cl="black">Team</Navs>
            <Navs cl="black">News</Navs>
            <Navs cl="black">Extras+</Navs>
            <Icon><AiOutlineMail /></Icon>
          </Navhold>
          <Search><BiSearch /></Search>
        </Wrapper>
      </Container>
      ):(
        <Container  bg="black">
        <Wrapper>
          <Menu><BiMenu /></Menu>
          <Logo src='https://zozothemes.com/html/layer/demo/images/logo-color.png' />
          
          <Navhold>
            <Navs cl="white">Home</Navs>
            <Navs  cl="white">Features</Navs>
            <Navs  cl="white">How it works</Navs>
            <Navs  cl="white">Screenshots</Navs>
            <Navs  cl="white">Team</Navs>
            <Navs  cl="white">News</Navs>
            <Navs  cl="white">Extras+</Navs>
            <Icon><AiOutlineMail /></Icon>
          </Navhold>
          <Search><BiSearch /></Search>
        </Wrapper>
      </Container>
     )}

   </div>
  )
  }

export default Header
const Search = styled.div`
  font-size: 30px;
  color: red;
  display:none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const Menu = styled.div`
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  display:none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const Icon = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
`
const Navs = styled.h4<{cl:string}>`
  text-transform: uppercase;
  color:  ${({ cl })  =>  cl};
  margin-left: 30px;
`
const Navhold = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.img`
  height: 35px;
`
const Wrapper = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div<{bg:string}>`
  display: flex;
  width: 100%;
  height: 80px;
  background-color:  ${({ bg })  =>  bg};
  justify-content: center;
  position: fixed;
`