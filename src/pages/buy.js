import React from 'react'
import styled from "styled-components"
// import media from "../components/media"

import pancake from "../images/pancakeswap.png"
// import binance from "../videos/binance-metamask.mp4"
// import kucoin from "../videos/kucoin-trust.mp4"

const BuyWrap = styled.section `
    background-position: center;
    background-repeat: none;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    margin: 0;
    padding: 90px 36px;
    width: 100%;
`
const SectionTitle = styled.h3`
    font-size: 1.8em;
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
    text-align: center;
`
const ContractID = styled.p`
    color: white;
    text-align: center;
    margin: 24px auto;

    span {color: magenta;}
`
const Frame = styled.div`
    margin: 0 auto;
    width: 240px;
`
const Picture = styled.img`
    width: 100%;
    max-width: 100%;
`
const CallToAction = styled.div`
    margin: 0 auto;
    text-align: center;
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


export default function Buy() {
    return (
        <BuyWrap>
            <SectionTitle>How to Buy</SectionTitle>
            <Frame>
                <Picture
                    alt="Pancake Swap"
                    src={pancake}
                />
            </Frame>
            <ContractID>CFC Coin Address:<br />
            <span>0xb3e2619dC65530585D1dC2F3CCbcce0fDE9e2EE9</span></ContractID>
            {/* <video videoSrcUrl={kucoin} /> */}
            <CallToAction>
                <Button href="https://exchange.pancakeswap.finance/#/swap" target="_blank" rel="noreferrer">Buy on PancakeSwap</Button>
            </CallToAction>
        </BuyWrap>
    )
}
