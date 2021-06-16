import React from 'react'
import styled from "styled-components"
import media from "../components/media"
import founder from "../images/founder-jessie.jpg"
import wall from "../images/brick-wall.jpg"

const FounderWrap = styled.section`
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
    /* height: 300px; */
    margin: 0 auto;
    padding: 12px;
    width: 100%;
    max-width: 420px;
    ${media.tablet`
        height: 420px;
        margin: 0 24px 0 0;
        width: 420px;
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



export default function Founder() {
    return (
        <FounderWrap>
            <SectionImage>
                <Frame>
                    <Picture
                        alt="CFC Founder"
                        src={founder}
                    />
                </Frame>
            </SectionImage>
            <SectionInfoWrap>
                <SectionTitle>CFC Founder</SectionTitle>
                <Text>
                    <strong>Club<span>Fun</span>Coin</strong> was envisioned and started by <strong>Jessie Grundy</strong>, a Bay Area entrepreneur with years of experience growing businesses from the ground up. Most notably, his luxury cannabis brand Peakz, which has been featured in Forbes Magazine twice in the last three years. Peakz is also one of the largest social equity brands in the country. Jessie also transitioned these skills into a new space, developing a first of its kind surrounding the world of NFTs. A bag of cannabis, that exists only online, linked to blockchain technology. Tokened “Lava Coin,” the digital bag is available anywhere in the world, and it’s also legal anywhere in the world. As well, if you are based in Oregon or California, you can actually get “real” marijuana for owning Lava Coin. Jessie has also continually been an active mentor to aspiring minority business owners in the Bay Area. 
                </Text>
                <a href="https://www.linkedin.com/in/jessie-grundy-61959741/" target="_blank" rel="noreferrer" >Jessie Grundy on LinkedIn</a>
                <Button href="https://www.forbes.com/sites/chrisroberts/2021/03/01/would-you-buy-digital-marijuana-blockchain-based-nfts-arrive-in-cannabis/?sh=36e07e1b30a3" target="_blank" >Jessie Grundy Forbes Interview</Button>
            </SectionInfoWrap>
        </FounderWrap>

    )
}
