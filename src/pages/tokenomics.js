import React from 'react'
import styled from "styled-components"
import media from "../components/media"
import Icon from "../components/icon"

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
const List = styled.div`
    list-style: none;
    margin: 0 auto;
    padding: 0;
    ${media.tablet`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `};
`
const ListItem = styled.div`
    margin: 0 auto;
    padding: 0 24px;

    span {color: magenta;font-size: 1.5em;line-height:1.5;}
`
const MetricTag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export default function Tokenomics() {
    return (
        <TokenomicsWrap>
            <SectionTitle>Tokenomics</SectionTitle>
            <List>
            <ListItem>
                <MetricTag>
                    <Icon shape="tag" color="cyan" size="90px" />
                    Current Price: 
                    <span>~ $0.00000558733</span>
                </MetricTag>
            </ListItem>
            <ListItem>
                <MetricTag>
                    <Icon shape="wallet" color="cyan" size="90px" />
                    Market Cap: 
                    <span>~ $1,117,466</span>
                </MetricTag>
            </ListItem>
            <ListItem>
                <MetricTag>
                    <Icon shape="group" color="cyan" size="90px" />
                    Holders: 
                    <span> 630+</span>
                </MetricTag>
            </ListItem>
            <ListItem>
                <MetricTag>
                    <Icon shape="infinity" color="cyan" size="90px" />
                    Supply: 
                    <span> 200,000,000,000</span>
                </MetricTag>
            </ListItem>
            {/* <ListItem> */}
                {/* <MetricTag> */}
                    {/* Locked Liquidity Pool:  */}
                    {/* <span>$30,280</span> */}
                {/* </MetricTag> */}
            {/* </ListItem> */}
            </List>
        </TokenomicsWrap>
    )
}
