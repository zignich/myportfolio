import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const WebDesign = ({ data, location }) => {

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
  const image11 = get(data, 'image11.childImageSharp.sizes')
  const image12 = get(data, 'image12.childImageSharp.sizes')
  const image13 = get(data, 'image13.childImageSharp.sizes')
  const image14 = get(data, 'image14.childImageSharp.sizes')
  const image15 = get(data, 'image15.childImageSharp.sizes')

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Web design</h1>
            <hr />
            <div className="row">
              <div className="card col-md-12 col-sm-12 pt-3 mt-2">
                <Img sizes={image1} className="mb-3" />
                <Img sizes={image2} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={image7} className="mb-3" />
                <Img sizes={image8} className="mb-3" />
                <Img sizes={image9} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={image10} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={image11} className="mb-3" />
                <Img sizes={image12} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={image3} className="mb-3" />
                <Img sizes={image4} className="mb-3" />
                <Img sizes={image5} className="mb-3" />
                <Img sizes={image6} className="mb-3" />
              </div>
              <div className="col-md-12 col-sm-12 pt-3 mt-3 mb-3 text-center">
                <h2 className="font-weight-light">- LANDING PAGES -</h2>
                <hr />
              </div>
              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={image13} className="mb-3" />
              </div>
              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={image14} className="mb-3" />
              </div>
              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={image15} className="mb-3" />
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default WebDesign

export const pageQuery = graphql`
  query WebdesignQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }

    image1: file(relativePath: { eq: "webdesign/web_design_11.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "webdesign/web_design_12.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "webdesign/web_design_1.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image4: file(relativePath: { eq: "webdesign/web_design_2.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image5: file(relativePath: { eq: "webdesign/web_design_3.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image6: file(relativePath: { eq: "webdesign/web_design_4.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image7: file(relativePath: { eq: "webdesign/web_design_5.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image8: file(relativePath: { eq: "webdesign/web_design_6.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image9: file(relativePath: { eq: "webdesign/web_design_7.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image10: file(relativePath: { eq: "webdesign/web_design_8.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image11: file(relativePath: { eq: "webdesign/web_design_9.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image12: file(relativePath: { eq: "webdesign/web_design_10.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image13: file(relativePath: { eq: "webdesign/web_design_13.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image14: file(relativePath: { eq: "webdesign/web_design_14.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image15: file(relativePath: { eq: "webdesign/web_design_15.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

  }
`
