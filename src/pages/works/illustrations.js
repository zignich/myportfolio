import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const IllustrationsPage = ({ data, location }) => {

  const image1 = get(data, 'image1.childImageSharp.sizes')
  const image2 = get(data, 'image2.childImageSharp.sizes')
  const image3 = get(data, 'image3.childImageSharp.sizes')
  const image4 = get(data, 'image4.childImageSharp.sizes')
  const image5 = get(data, 'image5.childImageSharp.sizes')
  const image6 = get(data, 'image6.childImageSharp.sizes')
  const image7 = get(data, 'image7.childImageSharp.sizes')
  const image8 = get(data, 'image8.childImageSharp.sizes')
  const image9 = get(data, 'image9.childImageSharp.sizes')
  const image10 = get(data, 'image10.childImageSharp.sizes')

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Illustrations</h1>
            <hr />
            <div className="row">
              <Img sizes={image1} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image2} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image3} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image4} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image5} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image6} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image7} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image8} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image9} className="col-md-12 col-sm-12 mb-3"/>
              <Img sizes={image10} className="col-md-12 col-sm-12"/>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IllustrationsPage

export const pageQuery = graphql`
  query IllustrationsQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    image1: file(relativePath: { eq: "illustrations/illustr_1.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "illustrations/illustr_2.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "illustrations/illustr_3.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image4: file(relativePath: { eq: "illustrations/illustr_4.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image5: file(relativePath: { eq: "illustrations/illustr_5.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image6: file(relativePath: { eq: "illustrations/illustr_6.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image7: file(relativePath: { eq: "illustrations/illustr_7.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image8: file(relativePath: { eq: "illustrations/illustr_8.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image9: file(relativePath: { eq: "illustrations/illustr_9.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image10: file(relativePath: { eq: "illustrations/illustr_10.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

  }
`
