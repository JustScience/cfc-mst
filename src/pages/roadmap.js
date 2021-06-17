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

    &.checked:before {
        color: magenta;
        content: '✓ ';
    }
`

export default function Roadmap() {
    return (
        <RoadmapWrap>
            <SectionTitle>Roadmap</SectionTitle>
            <List>
                <ListItem className="checked"><span>Phase 1</span>
                    <List>
                        <ListItem className="checked">Launch ClubFunCoin ($CFC) on the Binance Smart Chain</ListItem>
                        <ListItem className="checked">Launch clubfuncoin.com</ListItem>
                        <ListItem className="checked">Twitter giveaways</ListItem>
                        <ListItem className="checked">Release whitepaper</ListItem>
                        <ListItem className="checked">Submit to Certik for official audit</ListItem>
                        <ListItem className="checked">Launch ClubFunCoin ($CFC) on the Binance Smart Chain</ListItem>
                        <ListItem className="checked">Submit to Token Trackers
                            <List>
                                <ListItem>-- CoinGecko</ListItem>
                                <ListItem>-- CoinMarketCap</ListItem>
                            </List>
                        </ListItem>
                        <ListItem className="checked">Submit to Exchanges
                            <List>
                                <ListItem>-- WhiteBit</ListItem>
                                <ListItem>-- BitMart</ListItem>
                                <ListItem>-- FTX</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem><span>Phase 2</span>
                    <List>
                        <ListItem>Release the Smart Ticket System on clubfuncoin.com</ListItem>
                        <ListItem>Merchandise sales through CFC</ListItem>
                        <ListItem>Approach artists interested in collaborating for first ticket sales</ListItem>
                        <ListItem>Targeted promotions on Instagram, Facebook, and Youtube</ListItem>
                        <ListItem>Submit to Major Exchanges
                            <List>
                                <ListItem>-- KuCoin</ListItem>
                                <ListItem>-- Binance</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem><span>Phase 3</span>
                    <List>
                        <ListItem>Approach larger venues</ListItem>
                        <ListItem>Market the Smart Ticket System to the music industry</ListItem>
                        <ListItem>Celebrity promotions in the music industry</ListItem>
                        <ListItem>Create a social platform for fans to view and share the NFTs they and others have collected</ListItem>
                        <ListItem>Launch a seat selection system for venues offering reserved seating</ListItem>
                    </List>
                </ListItem>
            </List>
        </RoadmapWrap>
    )
}
