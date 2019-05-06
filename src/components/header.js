import { Link } from "gatsby"
import React from "react"
import LogoOverlay from "./logoOverlay"
import BgImage from "./BgImage"
import styled, { css } from 'styled-components'

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

  return acc
}, {})

/*const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries *//*
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`; */ // CAN BE USED FOR QUERIES. GOOD PRACTICE

const HeadDiv = styled.div`
    height: 100vh;
    width: 100vw;

    ${media.desktop`
      height: 32vh;
      width: 100%;
    `}
    
    ${media.tablet`
      height: 30vh;
    `}
    
    ${media.phone`
      
      `}
`  
const SpanBlock = styled.span`
    position: absolute;
    top: 1%;
    left: 0.8%;

    ${media.desktop`
      top: 0.6%;
      left: 0.8%;
    `}

    ${media.tablet`
      top: 0.8%;
    `}
    ${media.phone``}
  `

const LinkStyleOne = styled(Link)`
    color: black;
    text-decoration: none;
    position: absolute:
    z-index: 1;
    top: 1%;
    left: 2000px;
    font-family: Verdana, sans-serif;
    text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff;

    ${media.desktop`
      top: 1%;
      margin-left: 1vw;
    `}

    ${media.tablet`
      top: 2%
      margin-left: 1.5vw
    `}
  ${media.phone``}
`


const TextStyle = styled.span`
    margin-left: 0.5%;
    color: black;
    position: absolute;
    top: 1%;
    left: 2.5%;
    z-index: 1;
    fontFamily: Verdana, sans-serif;
    text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff;

    ${media.desktop`
      top: 0.6%;
      left: 5.5%;
    `}

    ${media.tablet`
      top: 2%;
      left: 6%;
    `}
  ${media.phone``}
`

const LinkStyleTwo = styled(Link)` 
    color: black;
    left: 4%;
    text-decoration: none;
    position: absolute;
    z-index: 1;
    top: 1%;
    font-family: Verdana, sans-serif;
    text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff;

    ${media.desktop`
      top: 0.6%;
      left: 8.5%;
    `}

    ${media.tablet`
      top: 2%;
      left: 9%;
    `}
  ${media.phone``}

`

const Logo = styled(LogoOverlay)`    
`

const BgImg = styled(BgImage)`    
`

const LogoBlock = styled.div`
    position: relative;
    top: -82%;
    z-index: 1;
    height: 292px;
    width: 812px;
    margin: 0 auto;

    ${media.desktop`
      top: -85%;
      height: 70%;
      width: 70%;
      margin: 0 auto;
    `}
    ${media.tablet`
      top: -102%;
      height: 65%;
      width: 65%;
      margin: 0 auto;`}
    ${media.phone``}
  `


const Header = () => (
    <HeadDiv>
      <BgImg/>
      <LogoBlock>
      <Logo/>
      </LogoBlock>
      <SpanBlock>
        <LinkStyleOne
          to="/" 
        >{"PT"}
          </LinkStyleOne>
      </SpanBlock>
      <TextStyle
      >|</TextStyle>
      <span>
        <LinkStyleTwo
          to="/"
        >{"EN"}
          </LinkStyleTwo>
      </span>
    </HeadDiv>
)

export default Header
