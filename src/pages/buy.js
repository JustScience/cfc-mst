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

export default function Buy() {
    return (
        <BuyWrap>
            <SectionTitle>How to Buy</SectionTitle>
            <ContractID>CFC Coin Address:<br />
            <span>0xb3e2619dC65530585D1dC2F3CCbcce0fDE9e2EE9</span></ContractID>
            {/* <video videoSrcUrl={kucoin} /> */}
        </BuyWrap>
    )
}
