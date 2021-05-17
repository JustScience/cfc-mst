import React from 'react'
import styled from 'styled-components';
import sky from "../images/hero-sky.jpg"

const ContactWrap = styled.section`
    background-image: url(${sky});
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
const Email = styled.a`
    color: cyan;
    font-size: 1.5em;
    padding: 0;
    text-align: center;
`

export default function Contact() {
    return (
        <ContactWrap>
            <SectionTitle>Contact Us</SectionTitle>
            <Email href="mailto:info@clubfuncoin.com">info@clubfuncoin.com</Email>
        </ContactWrap>
    )
}
