import React from 'react'
import styled from 'styled-components';
import media from "../components/media"
import wall from "../images/brick-wall.jpg"
import arrow from "../images/neon-arrow.png"

const AboutWrap = styled.section`
    align-items: flex-start;
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
        align-items: center;
        flex-direction: row;
        justify-content: center;
    `};
`
const SectionImage = styled.div`
    height: 140px;
    margin: 48px 24px 0 0;
    width: 120px;

    ${media.tablet`
        height: 200px;
        margin: 0 24px 0 0;
        width: 150px;
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
    text-align: justify;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    ${media.tablet`
        text-align: left;;
    `};

    strong {color:white;}
    span {color:cyan;}
`
const Frame = styled.div`
    width: 100%;
    
    ${media.tablet`
        margin: 0;
    `};
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
const Spacer = styled.div`
    height: 30px;
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
                    Ticketing has always been an expensive process, prone to scams and authenticity issues. NFTs offer solutions for all of these issues and more. Many have come to know NFTs in recent months for their applications in the art world, but as NFTs can represent any form of unique information, it is only a matter of time before their use spreads to other industries.
                </Text>
                <Text>
                    Music artists can make use of NFTs to manage ticket sales themselves, setting the price their fans will pay and keeping all of the profits. Artists attach unique artwork to the tickets, giving them collectible value after events take place. As more and more music artists develop an understanding of NFTs, us developers can start using those NFTs in new innovative ways to improve and simplify pre-existing ticketing methods. Blockchain technology will cost less and provide better security, while adding a social aspect that will keep fans engaged long after events are held, with an easy to use platform. You can read more about the project and what we have planned in our whitepaper!
                </Text>
                <Spacer />
                <CallToAction>
                    <Button href="/ClubFunCoin_Whitepaper.pdf" target="_blank" rel="noreferrer">Read the Whitepaper</Button>
                </CallToAction>
                <br />
                <CallToAction>
                    <Button href="https://discord.gg/ASxhvT9zPn" target="_blank" rel="noreferrer">Join our Discord</Button>
                </CallToAction>
        </SectionInfoWrap>
        </AboutWrap>
    )
}
