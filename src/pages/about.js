import React from 'react'
import styled from 'styled-components';
import media from "../components/media"
import wall from "../images/brick-wall.jpg"
import arrow from "../images/neon-arrow.png"

const AboutWrap = styled.section`
    align-items: center;
    background-image: url(${wall});
    background-position: center;
    background-repeat: none;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    margin: 0;
    padding: 90px 36px;
    width: 100%;
    ${media.tablet`
        flex-direction: row;
        justify-content: center;
    `};
`
const SectionImage = styled.div`
    height: 200px;
    margin: 0 24px 0 0;
    width: 150px;
`
const SectionInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 450px;
    ${media.tablet`
        margin: 0;
    `};
`
const SectionTitle = styled.h3`
    font-size: 1.8em;
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
    text-align: right;
    ${media.tablet`
        text-align: left;;
    `};
`
const Text = styled.p`
    color: #bada55;
    font-weight: 500;
    text-align: right;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    ${media.tablet`
        text-align: left;;
    `};

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
                <Frame>
                    <Picture
                        alt="CRC Arrow"
                        src={arrow}
                    />
                </Frame>
            </SectionImage>
            <SectionInfoWrap>
                <SectionTitle>About CFC</SectionTitle>
                <Text>
                    ClubFunCoin was developed with the intention of providing music festivals with a fast, simple means of holding ticket presales and distributing merchandise at events. ClubFunCoin encourages fun and a positive existence all around. CFC aims to promote people carving out their own path, enabling their own success, all while being exactly who they want to be.
                </Text>
            </SectionInfoWrap>
        </AboutWrap>
    )
}
