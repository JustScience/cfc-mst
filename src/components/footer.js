import React from 'react'
import styled from 'styled-components';
import ground from "../images/hero-ground.jpg"

const FooterWrap = styled.section`
    background-image: url(${ground});
    background-position: center top;
    background-repeat: none;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 12px 36px;
    width: 100%;
`
const Copyright = styled.p`
    color: white;
    font-size: 0.9em;
    font-weight: 300;
    margin: 36px auto;
    text-align: center;
`

export default function Footer() {
    return (
        <FooterWrap>
            <Copyright>&copy; 2021  Club Fun Coin. All rights reserved.</Copyright>
        </FooterWrap>
    )
}
