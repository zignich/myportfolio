import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const WebDesign = ({ data, location }) => {

  const imagew1 = get(data, 'imagew1.childImageSharp.sizes')
  const imagew2 = get(data, 'imagew2.childImageSharp.sizes')
  const imagew3 = get(data, 'imagew3.childImageSharp.sizes')
  const imagew4 = get(data, 'imagew4.childImageSharp.sizes')
  const imagew5 = get(data, 'imagew5.childImageSharp.sizes')
  const imagew6 = get(data, 'imagew6.childImageSharp.sizes')
  const imagew7 = get(data, 'imagew7.childImageSharp.sizes')
  const imagew8 = get(data, 'imagew8.childImageSharp.sizes')
  const imagew9 = get(data, 'imagew9.childImageSharp.sizes')
  const imagew10 = get(data, 'imagew10.childImageSharp.sizes')
  const imagew11 = get(data, 'imagew11.childImageSharp.sizes')
  const imagew12 = get(data, 'imagew12.childImageSharp.sizes')

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
                <Img sizes={imagew1} className="mb-3" />
                <Img sizes={imagew2} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={imagew7} className="mb-3" />
                <Img sizes={imagew8} className="mb-3" />
                <Img sizes={imagew9} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={imagew10} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={imagew11} className="mb-3" />
                <Img sizes={imagew12} className="mb-3" />
              </div>

              <div className="card col-md-12 col-sm-12 pt-3 mt-3">
                <Img sizes={imagew3} className="mb-3" />
                <Img sizes={imagew4} className="mb-3" />
                <Img sizes={imagew5} className="mb-3" />
                <Img sizes={imagew6} className="mb-3" />
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
    imagew3: file(relativePath: { eq: "webdesign/web_design_1.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew4: file(relativePath: { eq: "webdesign/web_design_2.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew5: file(relativePath: { eq: "webdesign/web_design_3.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew6: file(relativePath: { eq: "webdesign/web_design_4.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew7: file(relativePath: { eq: "webdesign/web_design_5.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew8: file(relativePath: { eq: "webdesign/web_design_6.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew9: file(relativePath: { eq: "webdesign/web_design_7.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew10: file(relativePath: { eq: "webdesign/web_design_8.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew11: file(relativePath: { eq: "webdesign/web_design_9.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imagew12: file(relativePath: { eq: "webdesign/web_design_10.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

  }
`
