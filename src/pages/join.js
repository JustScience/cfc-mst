import React from 'react'
import styled from 'styled-components';

const JoinWrap = styled.section`
    background-position: center bottom;
    background-repeat: none;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
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
const SocialLink = styled.a`
    color: magenta;
    font-size: 1.5em;
    padding: 0;
    text-align: center;
`

export default function Join() {
    return (
        <JoinWrap>
            <SectionTitle>Join the Club</SectionTitle>
            <SocialLink href="https://discord.gg/D9pukFdn">Discord</SocialLink>
            <SocialLink href="https://t.me/ClubFunCoin">Telegram</SocialLink>
            <SocialLink href="https://www.instagram.com/clubfuncoin/">Instagram</SocialLink>
            <SocialLink href="https://twitter.com/clubfuncoin">Twitter</SocialLink>
        </JoinWrap>
    )
}
