import React from 'react'
import styled from "styled-components"
import media from "../components/media"
import cofounder from "../images/founder-tim.jpg"
// import wall from "../images/brick-wall.jpg"

const CoFounderWrap = styled.section`
    align-items: center;
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
    /* height: 300px; */
    margin: 0 auto;
    padding: 12px;
    width: 100%;
    max-width: 300px;
    ${media.tablet`
        height: 360px;
        margin: 0 24px 0 0;
        width: 360px;
    `};
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
    margin-top: 12px;
    padding: 0;
    text-align: center;
    ${media.tablet`
        text-align: left;
    `};
`
const Text = styled.p`
    color: #bada55;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    ${media.tablet`
        text-align: left;
    `};

    strong {color:white;}
    span {color:cyan;}
`
const Frame = styled.div`
    width: 100%;
`
const Picture = styled.img`
    border-radius: 50%;
    width: 100%;
    max-width: 100%;
`

export default function CoFounder() {
    return (
        <CoFounderWrap>
            <SectionImage>
                <Frame>
                    <Picture
                        alt="CFC Founding Member"
                        src={cofounder}
                    />
                </Frame>
            </SectionImage>
            <SectionInfoWrap>
                <SectionTitle>Founding Member</SectionTitle>
                <Text>
                    <strong>Timothy Demry</strong> aka Blockchain T, An optimistic Bay Area native and crypto currency enthusiast. Blockchain T was raised in a single parent household and became the first in his family to graduate college. Teach for America alumni, Timothy has a heavy background in Real Estate & Crypto currency. Everyday he craves new challenges within Real Estate & Crypto, while pursuing a higher level of knowledge. Timothy is driven by the love for urban communities as well as his own family & hobbies. 
                </Text>
            </SectionInfoWrap>
        </CoFounderWrap>
    )
}
