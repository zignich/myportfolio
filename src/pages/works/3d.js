import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const RendersPage = ({ data, location }) => {

  const image1 = get(data, 'image1.childImageSharp.sizes')
  const image2 = get(data, 'image2.childImageSharp.sizes')
  const image3 = get(data, 'image3.childImageSharp.sizes')
  const image4 = get(data, 'image4.childImageSharp.sizes')

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">3d renders</h1>
            <hr />
            <div className="row">

              <div className="card col-md-12 col-sm-12 pt-3 mt-2">
                <Img sizes={image1} className="mb-3" />
              </div>
              <div className="card col-md-12 col-sm-12 pt-3 mt-2">
                <Img sizes={image2} className="mb-3" />
              </div>
              <div className="card col-md-12 col-sm-12 pt-3 mt-2">
                <Img sizes={image3} className="mb-3" />
              </div>
              <div className="card col-md-12 col-sm-12 pt-3 mt-2">
                <Img sizes={image4} className="mb-3" />
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default RendersPage

export const pageQuery = graphql`
  query RendersQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    image1: file(relativePath: { eq: "3d/3d_1.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "3d/3d_2.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "3d/3d_3.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    image4: file(relativePath: { eq: "3d/3d_4.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }


  }
`
