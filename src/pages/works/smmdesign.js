import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const SmmDesign = ({ data, location }) => {

  const image1 = get(data, 'image1.childImageSharp.sizes')
  const image2 = get(data, 'image2.childImageSharp.sizes')
  const image3 = get(data, 'image3.childImageSharp.sizes')
  const image4 = get(data, 'image4.childImageSharp.sizes')
  const image5 = get(data, 'image5.childImageSharp.sizes')
  const image6 = get(data, 'image6.childImageSharp.sizes')
  const image7 = get(data, 'image7.childImageSharp.sizes')

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Designs for social media</h1>
            <hr className="pb-2"/>
              <Img sizes={image1} className="col-md-12 col-sm-12 mb-3 p-3"/>
              <Img sizes={image2} className="col-md-12 col-sm-12 mb-3 p-3"/>
              <Img sizes={image3} className="col-md-12 col-sm-12 mb-3 p-3"/>
              <Img sizes={image4} className="col-md-12 col-sm-12 mb-3 p-3"/>
              <Img sizes={image5} className="col-md-12 col-sm-12 mb-3 p-3"/>
              <Img sizes={image6} className="col-md-12 col-sm-12 mb-3 p-3"/>
              <Img sizes={image7} className="col-md-12 col-sm-12 mb-3 p-3"/>

          </div>
        </section>
      </div>
    </Layout>
  )
}

export default SmmDesign

export const pageQuery = graphql`
  query SmmdesignQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    image1: file(relativePath: { eq: "smm/smm_1.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "smm/smm_2.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "smm/smm_3.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image4: file(relativePath: { eq: "smm/smm_4.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image5: file(relativePath: { eq: "smm/smm_5.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image6: file(relativePath: { eq: "smm/smm_6.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image7: file(relativePath: { eq: "smm/smm_7.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

  }
`
