import React from 'react'
import styled from "styled-components"
import media from "../components/media"
import Icon from "../components/icon"

const TokenomicsWrap = styled.section `
    align-items: center;
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
const SectionInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 540px;
    ${media.tablet`
        margin: 0;
    `};
`
const Text = styled.p`
    color: #bada55;
    font-weight: 500;
    text-align: justify;
    text-shadow: 1px 4px 4px rgba(0,0,0,0.9);
    ${media.tablet`
        text-align: left;
    `};

    strong {color:white;}
    span {color:cyan;}
`
const Spacer = styled.div`
    height: 30px;
`
const Bullet = styled.li`
    padding-bottom: 12px;
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
                        <span>$0.00000395141</span>
                    </MetricTag>
                </ListItem>
                <ListItem>
                    <MetricTag>
                        <Icon shape="wallet" color="cyan" size="90px" />
                        Market Cap: 
                        <span>$395,141</span>
                    </MetricTag>
                </ListItem>
                <ListItem>
                    <MetricTag>
                        <Icon shape="group" color="cyan" size="90px" />
                        Holders: 
                        <span>700</span>
                    </MetricTag>
                </ListItem>
                <ListItem>
                    <MetricTag>
                        <Icon shape="infinity" color="cyan" size="90px" />
                        Supply: 
                        <span>100,000,000,000</span>
                    </MetricTag>
                </ListItem>
                {/* <ListItem> */}
                    {/* <MetricTag> */}
                        {/* Locked Liquidity Pool:  */}
                        {/* <span>$30,280</span> */}
                    {/* </MetricTag> */}
                {/* </ListItem> */}
            </List>
            <Spacer />
            <SectionInfoWrap>
                <Text>
                    ClubFunCoin is a non-profit and therefore automatically imposes a fee of 10% for all transactions with CFC. This tax serves to reduce volatility and keep value in the coin, all while rewarding existing holders. This tax is divided between two simple functions: reflection and LP acquisition. The details of these functions are outlined below:
                </Text>
                <ul>
                    <Bullet>
                        <Text>
                            Reflection - 2% redistributed to the community on that exchange, proportional to the tokens that they hold. This system incentivizes our community of holders who in turn support ClubFunCoin, helping make the project sustainable in the long-term. The fees collected are disbursed across the exchange they were collected on. For CFC holders on a centralized exchange, their tokens will be snapshotted daily, and an averaged reward will be disbursed on the 1st of every month.
                        </Text>
                    </Bullet>
                    <Bullet>
                        <Text>
                            LP Acquisition - 8% is transferred back as liquidity provider tokens to the PancakeSwap Liquidity Pool (LP). This ensures that as the project progresses, there will be sufficient liquidity to sustain increases in trading volume. Half of this tax is sold by the contract into BNB, while the other half of the CFC is paired automatically with the previously mentioned BNB and added as a liquidity pair on PancakeSwap.
                        </Text>
                    </Bullet>
                </ul>
            </SectionInfoWrap>
        </TokenomicsWrap>
    )
}
