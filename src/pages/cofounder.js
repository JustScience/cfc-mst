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
    text-align: justify;
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
const Button = styled.a`
	border: 3px solid cyan;
	border-radius: 10px;
	color: magenta;
	cursor: pointer;
    font-size: 1.2em;
	margin: 36px auto 0 auto;
	padding: 8px 20px;
    text-align: center;
	transition: all 360ms ease-in-out;

	&:hover {
        border-color: magenta;
		color: #bada55;
	}
`;

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
                    <strong>Timothy Demry</strong> is an optimistic Bay Area native and cryptocurrency enthusiast. Demry was raised in a single parent household and became the first in his family to graduate from college, all while working closely with Teach for America. Demry has a strong background in real estate and spends much of his time working to help impoverished communities.
                </Text>
                <Button href="https://www.linkedin.com/in/timothy-demry-16ab71123/" target="_blank" rel="noreferrer" >Timothy Demry on LinkedIn</Button>
            </SectionInfoWrap>
        </CoFounderWrap>
    )
}
