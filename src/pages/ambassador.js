import React from 'react'
import styled from "styled-components"
import media from "../components/media"
import ambassador from "../images/ambassador-david.jpg"
// import wall from "../images/brick-wall.jpg"

const AmbassadorWrap = styled.section`
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

export default function Ambassador() {
    return (
        <AmbassadorWrap>
            <SectionImage>
                <Frame>
                    <Picture
                        alt="CFC Founding Member"
                        src={ambassador}
                    />
                </Frame>
            </SectionImage>
            <SectionInfoWrap>
                <SectionTitle>Founding Member</SectionTitle>
                <Text>
                    <strong>David Guevara</strong> is a music artist and cryptocurrency entrepreneur based in New York City. Guevara will be reaching out to artists, studios, managers, producers, event planners, and many other professionals in the music industry to expand the vision and utility of ClubFunCoin. 
                </Text>
                <a href="https://www.linkedin.com/in/sayten89/" target="_blank" rel="noreferrer" >David Guevara on LinkedIn</a>
            </SectionInfoWrap>
        </AmbassadorWrap>
    )
}
