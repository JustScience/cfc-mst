import React from 'react'
import styled from 'styled-components';
import wall from "../images/brick-wall.jpg"
import arrow from "../images/neon-arrow.png"

const AboutWrap = styled.section`
    background-image: url(${wall});
    background-position: center;
    background-repeat: none;
    background-size: cover;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    margin: 0;
    padding: 90px 36px;
    width: 100%;
`
const SectionImage = styled.div`
    height: 120px;
    margin: 0 24px;
`
const SectionInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
`
const SectionTitle = styled.h3`
    font-size: 1.8em;
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
`
const Text = styled.p`
    color: #bada55;
    font-weight: 500;
    text-align: left;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    margin: 0 auto;
    max-width: 450px;

    strong {color:white;}
    span {color:cyan;}
`
const Frame = styled.div`
    width: 100%;
`
const Picture = styled.img`
    width: 100%;
    max-width: 100%;
`

export default function About() {
    return (
        <AboutWrap>
            <SectionImage>
            <   Frame>
                    <Picture
                        alt="CRC Arrow"
                        src={arrow}
                    />
                </Frame>
            </SectionImage>
            <SectionInfoWrap>
                <SectionTitle>About CFC</SectionTitle>
                <Text>
                    ClubFunCoin was developed with the intention of providing music festivals with a fast, simple means of holding ticket presales and distributing merchandise at events. CFC will be donating to charities focusing their efforts on educating children in poverty-stricken areas on technology and business. These donations will be performed bi-weekly over livestream. ClubFunCoin encourages fun and a positive existence all around. CFC aims to promote people carving out their own path, enabling their own success, all while being exactly who they want to be.
                </Text>
            </SectionInfoWrap>
        </AboutWrap>
    )
}