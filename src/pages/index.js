import * as React from "react"
import { Helmet } from 'react-helmet'
import styled from "styled-components"
import "../styles/global.css"

import Fullscreen from "../components/fullscreen"
import Header from "../components/header"
import Footer from "../components/footer"
// import ResponsiveGuide from "../components/responsive-guide"

import Hero from "./hero"
import Feature from "./feature"
import About from "./about"
import Buy from "./buy"
import Roadmap from "./roadmap"
import Tokenomics from "./tokenomics"
import Founder from "./founder"
import CoFounder from "./cofounder"
import Ambassador from "./ambassador"
import Join from "./join"
import Contact from "./contact"

// styles
const Page = styled.main`
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
`

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>CFC | Club Fun Coin | Nightlife Crypto for Live Music Events | NFT Collectible Event Tickets</title>
        <meta name="description" content="CFC | Club Fun Coin. Nightlife Crypto for Live Music Events. NFT Collectible Event Tickets" />
        <meta name="keywords" content="Crypto NFT Collectible Concert Tickets" />
      </Helmet>

      <Page>
        <Header />
        <Fullscreen>
          <Hero />
          <Feature />
        </Fullscreen>

        <About />
        <Buy />
        <Tokenomics />
        <Roadmap />
        <Founder />
        <CoFounder />
        <Ambassador />
        <Join />
        <Contact />

        <Footer />
        {/* <ResponsiveGuide /> */}
      </Page>
    </>
  )
}

export default IndexPage
