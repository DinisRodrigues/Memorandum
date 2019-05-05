import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation_extra"
import SEO from "../components/seo"
import styled, { css } from "styled-components"

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }

  `
console.log(acc);
  return acc
}, {})

const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;

const OuterContainer = styled.div`
  padding: 3% 0;
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 0;
`
const OuterVideoContainer = styled.div`
  margin-top: 10%;
  padding: 1% 1% 0 1%;
  -moz-box-shadow:    0 0 7px 1px #D4D0AB;
  -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
  box-shadow:         0 0 7px 1px #D4D0AB;
  border: thin solid #f1f1f1;
`

const TextSep = styled.hr`
   margin-left: -1.8%;
   margin-right: -1.8%;
   border: medium solid #DADFE1;
   color: #DADFE1;
   background-color: #DADFE1;
`
const TextSepSpecial = styled.hr`
   margin-top: -14%;
   margin-left: -1.8%;
   margin-right: -1.8%;
   border: medium solid #DADFE1;
   color: #DADFE1;
   background-color: #DADFE1;
`
   
const PageTitle = styled.h2`
    margin-top: 15%;
    margin-bottom: 10%;
`

const VideoContainer = styled.div`
    height: 90vh;
    width: 100%;

`

const VideoArticle = styled.article`
    margin-top: 10%
`

const VideoText = styled.p`
    margin-top: -10%
`

const IFrame = styled.iframe`
    display: block
`

const Videos = () => (
  <OuterContainer>
    <SEO title="Vídeos" />
    <Navigation />
    <OuterVideoContainer>
    <PageTitle><TextSepSpecial/>Vídeos</PageTitle>
    <VideoArticle id="one">
    <VideoContainer>
    <IFrame width="100%" height="75%"
    src="https://www.youtube.com/embed/tgbNymZ7vqY"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    >
    </IFrame> 
    </VideoContainer>
    <VideoText>Something something this person</VideoText>
    <TextSep/>
    </VideoArticle>

    <VideoArticle>
    <VideoContainer id="two">
    <IFrame width="100%" height="75%"
    src="https://www.youtube.com/embed/tgbNymZ7vqY"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    >
    </IFrame> 
    </VideoContainer>
    <VideoText>Something something this person</VideoText>
    <TextSep />
    </VideoArticle>
    </OuterVideoContainer>
  </OuterContainer>
)

export default Videos
