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
    color: #bada55;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    margin: 0 auto;
    max-width: 450px;

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
            <Text><strong>Club<span>Fun</span>Coin</strong> is a new cryptocurrency on the Binance Smart Chain aimed at facilitating transactions for music festivals all over the world—all while making regular donations to charity. Welcome to the CLUB.</Text>
        </FeatureWrap>
    )
}
