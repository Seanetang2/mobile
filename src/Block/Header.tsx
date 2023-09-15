import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from "react-icons/ai"
import { BiMenu, BiSearch } from "react-icons/bi"
import img from "../Assets/logo-color.png"
import react, { useState } from "react";

const Header = () => {

  const [header, setHeader] = useState(false);

  const headerChange = () => {
    const scroll = window.pageYOffset;

    if (scroll >= 260) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", headerChange);

  return (
    <Container>
      <Wrapper>
        <Menu><BiMenu /></Menu>
        <Logo src= {img} />
        
        <Navhold>
          <Navs>Home</Navs>
          <Navs>Features</Navs>
          <Navs>How it works</Navs>
          <Navs>Screenshots</Navs>
          <Navs>Team</Navs>
          <Navs>News</Navs>
          <Navs>Extras+</Navs>
          <Icon><AiOutlineMail /></Icon>
        </Navhold>
        <Search><BiSearch /></Search>
      </Wrapper>
    </Container>
  )
}

export default Header
const Search = styled.div`
  font-size: 30px;
  color: red;
`
const Menu = styled.div`
  font-size: 35px;
  color: #fff;
  cursor: pointer;
`
const Icon = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
`
const Navs = styled.h4`
  text-transform: uppercase;
  color: #fff;
  margin-left: 30px;

  &:hover{
    transition: all 200ms;
    cursor: pointer;
    color: black;
    transform: rotate(360deg);

}
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
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  position: fixed;
`