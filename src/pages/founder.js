import React from 'react'
import styled from "styled-components"
import media from "../components/media"

const FounderWrap = styled.section `
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
const Text = styled.p`
    color: #bada55;
    font-weight: 500;
    margin: 0 auto;
    text-align: justify;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    max-width: 540px;

    ${media.tablet`
        text-align: center;;
    `};

    strong {color:white;}
    span {color:magenta;}
`


export default function Founder() {
    return (
        <FounderWrap>
            <SectionTitle>Founder</SectionTitle>
            <Text>
            <strong>Club<span>Fun</span>Coin</strong> was envisioned and started by <strong>Jessie Grundy</strong>, a Bay Area entrepreneur with years of experience growing businesses from the ground up. Most notably, his luxury cannabis brand Peakz, which has been featured in Forbes Magazine twice in the last three years. Peakz is also one of the largest social equity brands in the country. Jessie also transitioned these skills into a new space, developing a first of its kind surrounding the world of NFTs. A bag of cannabis, that exists only online, linked to blockchain technology. Tokened “Lava Coin,” the digital bag is available anywhere in the world, and it’s also legal anywhere in the world. As well, if you are based in Oregon or California, you can actually get “real” marijuana for owning Lava Coin. 
            </Text>
        </FounderWrap>
    )
}
