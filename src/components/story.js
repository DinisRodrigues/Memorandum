import React from 'react';
import { Link, graphql } from 'gatsby'
import Navigation from "./navigation_extra"
import SEO from './seo'
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
    width: 60%;
    margin: auto;
`
const PageTitle = styled.h2`
    margin-top: 15%;
    margin-bottom: 10%;
`

function Story(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;

    return (
        <OuterContainer>
            <SEO title="Galeria de Imagens" />
            <Navigation />
            <PageTitle><hr/>Histórias</PageTitle>
                <div>
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
        </OuterContainer>
    )
}

export default Story

export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
       }
   }
}`
