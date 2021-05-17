import * as React from "react"
import styled from "styled-components"
import "../styles/global.css"

import Fullscreen from "../components/fullscreen"
import Header from "../components/header"
import Footer from "../components/footer"
import ResponsiveGuide from "../components/responsive-guide"

import Hero from "./hero"
import Feature from "./feature"
import About from "./about"
import Buy from "./buy"
import Roadmap from "./roadmap"
import Tokenomics from "./tokenomics"
import Founder from "./founder"
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
      <Contact />

      <Footer />
      {/* <ResponsiveGuide /> */}
    </Page>
  )
}

export default IndexPage
