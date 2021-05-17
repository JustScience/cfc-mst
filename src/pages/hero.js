import React from 'react'
import styled from "styled-components"
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
    max-width: 1080px;
`
const CallToAction = styled.div`
    margin: 0 auto;
    text-align: center;
`
const Frame = styled.div`
    max-width: 360px;
    margin: 0 auto;
`
const Picture = styled.img`
    width: 100%;
    max-width: 100%;
`
const Button = styled.a`
	border: 3px solid #bada55;
	border-radius: 10px;
	color: cyan;
	cursor: pointer;
    font-size: 1.2em;
	margin: 0;
	padding: 8px 20px;
	transition: all 360ms ease-in-out;

	&:hover {
        border-color: magenta;
		color: #bada55;
	}
`;

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
                    <Button href="https://exchange.pancakeswap.finance/#/swap" target="_blank" rel="noreferrer">BUY CFC</Button>
                </CallToAction>
            </Contain>
        </HeroWrap>
    )
}
