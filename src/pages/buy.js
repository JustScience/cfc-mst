import React from 'react'
import styled from "styled-components"
import media from "../components/media"

import pancake from "../images/pancakeswap.png"
import buy from "../images/buy.jpg"
import binance from "../videos/binance-metamask.mp4"
import kucoin from "../videos/kucoin-trust.mp4"

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
    margin: 24px auto;
    text-align: center;
    font-size: 0.9em;
    ${media.tablet`
        font-size: 1.5em;
    `};

    span {color: magenta;}
`
const TutorialTitle = styled.p`
    color: white;
    margin: 24px auto;
    text-align: center;
    font-size: 1em;

    span {color: magenta;}
`
const Frame = styled.div`
    margin: 0 auto;
    width: 240px;
`
const BigFrame = styled.div`
    margin: 0 auto;
    max-width: 480px;
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
const Video = styled.video`
    margin: 0 auto;
    width: 300px;
`
const Tutorials = styled.div`
    display: flex;
    flex-direction: column;
    margin: 48px auto;
    max-width: 1280px;
    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
    `};
`
const TutorialWrap = styled.div`
    width: 300px;
`

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
            <ContractID>CFC Contract Address:<br />
            <span>0xb3e2619dC65530585D1dC2F3CCbcce0fDE9e2EE9</span></ContractID>
            <CallToAction>
                <Button href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xb3e2619dC65530585D1dC2F3CCbcce0fDE9e2EE9" target="_blank" rel="noreferrer">Buy on PancakeSwap</Button>
            </CallToAction>
            <Tutorials>
                <TutorialWrap>
                    <TutorialTitle>KuCoin Dex to Trust Wallet</TutorialTitle>
                    <Video width="540px" controls><source src={kucoin} type="video/mp4" /></Video>
                </TutorialWrap>
                <TutorialWrap>
                    <TutorialTitle>Binance Dex to Metamask Wallet</TutorialTitle>
                    <Video width="540px" controls><source src={binance} type="video/mp4" /></Video>
                </TutorialWrap>
            </Tutorials>
            <BigFrame>
                <Picture
                    alt="Buy CFC on Mobile"
                    src={buy}
                />
            </BigFrame>
        </BuyWrap>
    )
}
