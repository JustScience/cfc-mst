import * as React from "react"
import styled from "styled-components"
import "../styles/global.css"
import Header from "../components/header"
import Hero from "../components/hero"
import Fullscreen from "../components/fullscreen"
import Feature from "../components/feature"
// import cestlavie from "../images/cest-la-vie.png"
import goodvibes from "../images/good-vibes.png"
import money from "../images/money.png"
// import { Link } from "gatsby"

// styles
const Page = styled.main`
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
`
const PageTitle = styled.h1`
  display: flex;
  font-size: 3em;
  color: white;
`
const Section = styled.section`
  margin: 0;
  padding: 36px;
  width: 100%;
`
const Frame = styled.div`
  width: 100%;
`
const Picture = styled.img`
  width: 100%;
  max-width: 100%;
`
const Text = styled.p`
  font-size: 1.2em;
  color: #bada55;
`

// data
// const links = [

// ]

// markup
const IndexPage = () => {
  return (
    <Page>
      <Header />
      <Fullscreen>
        <Hero />
        <Feature />
      </Fullscreen>
      <Section>
        <PageTitle>About CFC</PageTitle>
        <Text>
          ClubFunCoin was developed with the intention of providing music festivals with a fast, simple means of holding ticket presales and distributing merchandise at events. CFC will be donating to charities focusing their efforts on educating children in poverty-stricken areas on technology and business. These donations will be performed bi-weekly over livestream. ClubFunCoin encourages fun and a positive existence all around. CFC aims to promote people carving out their own path, enabling their own success, all while being exactly who they want to be.
        </Text>
      </Section>
      <Section>
        <Frame id="#money">
          <Picture
            alt="money"
            src={money}
          />
        </Frame>
        <Text>
          Pot hizzle rizzle quizzle nisi that's the shizzle mollizzle. Suspendisse gangster. Morbi odio. Shizzlin dizzle neque. Doggy orci. My shizz maurizzle dizzle, interdum a, fo shizzle my nizzle sit amizzle, fo shizzle izzle, pede. Pellentesque gravida. Crackalackin orci mi, volutpat izzle, yippiyo sed, that's the shizzle fo shizzle my nizzle, velit. Fizzle shut the shizzle up ipsizzle. Mammasay mammasa mamma oo sa volutpat felizzle fizzle fo. Crizzle quizzle justo in purizzle sodalizzle ornare. Away venenatizzle justo tellivizzle the bizzle. Nunc urna. Suspendisse fo shizzle my nizzle placerizzle lacizzle. Curabitizzle eu ante. Nunc pharetra, doggy eu dapibus hendrerizzle, black felizzle elementum sizzle, in break it down magna felis daahng dawg pede. Crackalackin shiz pot. Class hizzle that's the shizzle sociosqu izzle litora torquent per conubia go to hizzle, pizzle inceptizzle tellivizzle. Gangster interdizzle, bizzle nizzle shizzle my nizzle crocodizzle nonummy, owned orci viverra pimpin', shiznit funky fresh gizzle away nizzle sem.
        </Text>
      </Section>
      <Frame id="#vibes">
        <Picture
          alt="goodvibes"
          src={goodvibes}
        />
      </Frame>
      <Text>
        Nunc gangster break it down, bling bling tellivizzle, condimentum eget, sizzle izzle, crackalackin. Gangster sed bling bling shizzlin dizzle sizzle hendrerit mattis. Shit interdum magna izzle eros commodo ullamcorpizzle. Etizzle yo fermentum ligula. Morbi odio. Its fo rizzle phat metus ac dolizzle hizzle shit. Mofo sagittizzle viverra boofron. Shizznit doggy fo shizzle shiznit boom shackalack. Morbi venenatis ligula doggy amizzle tellizzle. lobortis enim yo mamma arcu. Hizzle sizzle for sure ghetto its fo rizzle magnis dis parturient yippiyo, nascetur phat mizzle.
      </Text>
    </Page>
  )
}

export default IndexPage
