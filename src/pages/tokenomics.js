import React from 'react'
import styled from "styled-components"

const TokenomicsWrap = styled.section `
    background-position: center;
    background-repeat: none;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
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
const List = styled.ul`
    list-style: none;
    margin: 0 auto;
    /* padding: 0; */
`
const ListItem = styled.ul`
    margin: 0;
    padding: 0;

    span {color: magenta;font-size: 1.5em;line-height:1.5;}
`

export default function Tokenomics() {
    return (
        <TokenomicsWrap>
            <SectionTitle>Tokenomics</SectionTitle>
            <List>
            <ListItem>Current Price: <span>$0.0000248551</span></ListItem>
            <ListItem>Market Cap: <span>$4,975,000</span></ListItem>
            <ListItem>Holders: <span>500+</span></ListItem>
            <ListItem>Supply: <span>200,000,000,000</span></ListItem>
            <ListItem>Locked Liquidity Pool: <span>$30,280</span></ListItem>
            </List>
        </TokenomicsWrap>
    )
}
