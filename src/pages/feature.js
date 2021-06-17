import React from 'react'
import styled from 'styled-components';
import ground from "../images/hero-ground.jpg"

const FeatureWrap = styled.section`
    background-image: url(${ground});
    background-position: center top;
    background-repeat: none;
    background-size: cover;
    height: 100%;
    margin: 0;
    padding: 36px;
    width: 100%;
`
const Text = styled.p`
    background-color: rgba(0,0,0,0.36);
    backdrop-filter: blur(3px);
    border-radius: 24px;
    color: #bada55;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    margin: 0 auto;
    max-width: 540px;
    padding: 24px;

    strong {color:white;}
    span {color:cyan;}
`
// const Frame = styled.div`
//     width: 100%;
// `
// const Picture = styled.img`
//     width: 100%;
//     max-width: 100%;
// `

export default function Feature() {
    return (
        <FeatureWrap>
            <Text><strong>Club<span>Fun</span>Coin</strong> (CFC) is a utility token developed to support the ClubFunCoin Smart Ticket System - an NFT marketplace enabling artists in the music industry to take full control over their ticket sales, all while providing fans with unique, collectible memories to hold or trade after events. Welcome to the CLUB.</Text>
        </FeatureWrap>
    )
}
