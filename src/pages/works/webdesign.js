import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

import image1 from '../../assets/images/webdesign/web_design_1.jpg'
import image2 from '../../assets/images/webdesign/web_design_2.jpg'
import image3 from '../../assets/images/webdesign/web_design_3.jpg'
import image4 from '../../assets/images/webdesign/web_design_4.jpg'
import image5 from '../../assets/images/webdesign/web_design_5.jpg'
import image6 from '../../assets/images/webdesign/web_design_6.jpg'
import image7 from '../../assets/images/webdesign/web_design_7.jpg'
import image8 from '../../assets/images/webdesign/web_design_8.jpg'
import image9 from '../../assets/images/webdesign/web_design_9.jpg'
import image10 from '../../assets/images/webdesign/web_design_10.jpg'
import image11 from '../../assets/images/webdesign/web_design_11.jpg'
import image12 from '../../assets/images/webdesign/web_design_12.jpg'

const WebDesign = ({ data, location }) => {

  const imagew1 = get(data, 'imagew1.childImageSharp.sizes')
  const imagew2 = get(data, 'imagew2.childImageSharp.sizes')

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Web design</h1>
            <hr />
            <div className="row">
              <div className="card col-md-12 col-sm-12 pt-3">
                <Img sizes={imagew1} className="mb-3" />
                <Img sizes={imagew2} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <img src={image5} />
                <img src={image6} />
                <img src={image7} />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <img src={image8} />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <img src={image9} />
                <img src={image10} />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
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

    imagew1: file(relativePath: { eq: "webdesign/web_design_11.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew2: file(relativePath: { eq: "webdesign/web_design_12.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

  }
`
