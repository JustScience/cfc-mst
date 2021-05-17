import React from 'react'
import styled from "styled-components"
import Button from "./button"
import logo from "../images/logo-big.png"
import sky from "../images/hero-sky.jpg"

const HeroWrap = styled.section`
    background-image: url(${sky});
    background-position: center;
    background-repeat: none;
    background-size: cover;
    height: 100%;
    margin: 0;
    padding: 120px 0 60px 0;
    width: 100%;
`
const Contain = styled.div`
    margin: 0 auto;
`
const CallToAction = styled.div`
    margin: 0 auto;
`

const Frame = styled.div`
    width: 300px;
    margin: 0 auto;
`
const Picture = styled.img`
    width: 100%;
    max-width: 100%;
`

export default function Hero() {
    return (
        <HeroWrap>
            <Contain>
                <Frame>
                    <Picture
                        alt="Club Fun Coin Logo"
                        src={logo}
                    />
                </Frame>
                <CallToAction>
                    <a href="https://exchange.pancakeswap.finance/#/swap" target="_blank" rel="noreferrer"><Button label="BUY CFC" /></a>
                </CallToAction>
            </Contain>
        </HeroWrap>
    )
}
