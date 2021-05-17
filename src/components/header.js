import React from 'react'
import styled from "styled-components"
import icon from "../images/icon.png"
import Button from "./button"

const HeaderWrap = styled.header`
  background-image: linear-gradient(rgba(0,0,0,1.0),rgba(0,0,0,0.0));
  display: flex;
  flex-direction: column;
  /* height: 60px; */
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 12px;
`
const HeaderTop = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  width: 100%;
`
const HeaderBottom = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  width: 100%;
`
const HeaderLogo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
const HeaderLogoImg = styled.img`
  height: 60px;
  margin-right: 6px;
`
const HeaderLogoText = styled.span`
  display: flex;
  font-size: 2em;
  span {
    color: magenta;
  }
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 auto;
`
const NavLink = styled.button`
  background: rgba(0,0,0,0.75);
  border: none;
  border-radius: 6px;
  color: darkslateblue;
  cursor: pointer;
  font-size: .9em;
  margin: 0 2px;
  mix-blend-mode: difference;
  padding: 8px 12px;
  text-decoration: none;
  text-shadow: 0 1px 12px rgba(0,0,0,0.9);
  transition: color 300ms ease-in-out;

  &:hover {
    color: pink;
  }
`

export default function Header() {
    return (
        <HeaderWrap>
            <HeaderTop>
              <HeaderLogo>
                <HeaderLogoImg src={icon}/>
                <HeaderLogoText>Club<span>Fun</span>Coin</HeaderLogoText>
              </HeaderLogo>
              <a href="https://exchange.pancakeswap.finance/#/swap" target="_blank" rel="noreferrer"><Button label="BUY CFC" /></a>
            </HeaderTop>
            <HeaderBottom>
              <Nav>
                <NavLink type="button" onclick="document.getElementById('money').scrollIntoView({behavior:'smooth'})">About</NavLink>
                <NavLink type="button" onclick="document.getElementById('vibes').scrollIntoView({behavior:'smooth'})">Buy</NavLink>
                {/* <NavLink type="button" onclick="document.getElementById('money').scrollIntoView({behavior:'smooth'})">Links</NavLink> */}
                <NavLink type="button" onclick="document.getElementById('vibes').scrollIntoView({behavior:'smooth'})">Tokenomics</NavLink>
                <NavLink type="button" onclick="document.getElementById('vibes').scrollIntoView({behavior:'smooth'})">Roadmap</NavLink>
                <NavLink type="button" onclick="document.getElementById('vibes').scrollIntoView({behavior:'smooth'})">Founder</NavLink>
                <NavLink type="button" onclick="document.getElementById('vibes').scrollIntoView({behavior:'smooth'})">Contact</NavLink>
              </Nav>
            </HeaderBottom>
        </HeaderWrap>
    )
}