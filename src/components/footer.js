import React from 'react'
import styled from 'styled-components';

const FooterWrap = styled.footer`
    background-color: black;
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
