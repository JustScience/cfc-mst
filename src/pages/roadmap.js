import React from 'react'
import styled from 'styled-components';

const RoadmapWrap = styled.section `
    background-position: center top;
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

    span {font-size: 1.5em;line-height:3;}
`

export default function Roadmap() {
    return (
        <RoadmapWrap>
            <SectionTitle>Roadmap</SectionTitle>
            <List>
                <ListItem><span>May</span>
                    <List>
                        <ListItem>Pre-Sale - 11 May 2021</ListItem>
                        <ListItem>Token Launch - 16 May 2021
                            <List>
                                <ListItem>-- Liquidity Pool Locked</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Certik Audit submitted and in Progress</ListItem>
                        <ListItem>Submit to Major Exchanges and Token Trackers
                            <List>
                                <ListItem>-- Binance</ListItem>
                                <ListItem>-- CoinMarketCap</ListItem>
                                <ListItem>-- CoinGecko</ListItem>
                                <ListItem>-- WhiteBit</ListItem>
                                <ListItem>-- BitMart</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Marketing &amp; Promotions
                            <List>
                                <ListItem>-- Targeted Advertisements</ListItem>
                                <ListItem>-- Los Angeles &amp; Bay Area CFC Billboards</ListItem>
                                <ListItem>-- Social Media - Influencers/Creators</ListItem>
                                <ListItem>-- Music Industry Related</ListItem>
                            </List>
                        </ListItem>
                        {/* <ListItem>First Donation Livestream</ListItem> */}
                    </List>
                </ListItem>
                <ListItem><span>June</span>
                    <List>
                        <ListItem>Marketing &amp; Promotions
                            <List>
                                <ListItem>-- Targeted Advertisements</ListItem>
                                <ListItem>-- Social Media - Influencers/Creators</ListItem>
                                <ListItem>-- Music Industry Related</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Merchandise Rollout</ListItem>
                        {/* <ListItem>Second Donation Livestream</ListItem>
                        <ListItem>Third Donation Livestream</ListItem> */}
                        <ListItem>Music Festival Collaboration
                            <List>
                                <ListItem>-- Currently speaking with Rolling Loud for 2022</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
        </RoadmapWrap>
    )
}
