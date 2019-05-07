import React from "react"
import { Link, graphql } from "gatsby"
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


const OuterContainer = styled.div`
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 3% 0;
  width: 80%;
  margin: auto;

  ${media.desktop`
    width: 82%;
    padding: 5% 0;
  `}

  ${media.tablet`
    width: 85%;
    padding: 7% 0;
  `}

  ${media.phone`
    width: 95%;
    padding: 9% 0;
  `}
`

const BodyDiv = styled.div`
  margin-top: 10%;
  padding: 1% 1% 0 1%;
  margin-bottom: 6%;
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

const PostLink = styled(Link)`
  text-decoration: none;
`

const PostContainer = styled.div`
  
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  
`
const PostList = styled.div`
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: black;
`

const PostTitle = styled.h1`
  margin-bottom: 5%;
  color: #000;
  text-shadow:
    -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
`

const PostDate = styled.span`
  display: inline-block; 
  margin-bottom: 3%;
`



const Historias = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
  <OuterContainer>
    <SEO title="Histórias" />
    <Navigation />
    <BodyDiv>
    <PageTitle><TextSepSpecial/>Histórias</PageTitle>
    <PostContainer>
      {postList.edges.map(({ node }, i) => (
        
        <PostLink to={node.fields.slug} className="link" >
        <PostList>
        <PostTitle>{node.frontmatter.title}</PostTitle>
        <PostDate>{node.frontmatter.date}</PostDate>
        <p>{node.excerpt}</p>
        </PostList>
        </PostLink>
        
    ))}
    <TextSep/>
    </PostContainer>
    </BodyDiv>
  </OuterContainer>
  )
}


export default Historias

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "dddd, DD/MM/YYYY", locale: "pt") 
            title
          }
        }
      }
    }
  }
`
//add locale "en" to line 121 for english translation

//Use example above for mass import of images