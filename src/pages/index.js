import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

import indexStyles from './index.module.scss'

const IndexPage = ({ data, location }) => {
  const illustr = get(data, 'illustr.childImageSharp.sizes')
  const webdesign = get(data, 'webdesign.childImageSharp.sizes')
  const graphicdesign = get(data, 'graphicdesign.childImageSharp.sizes')
  const smm = get(data, 'smm.childImageSharp.sizes')

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Hi and welcome to my portfolio!</h1>
            <hr className="pb-3"/>
            <div className="row card-deck text-center">
              <div className={"card col-md-6 col-sm-12 pt-3 " + indexStyles.card}>
                <Link to="/works/illustrations/">
                <Img sizes={illustr} className={"card-img-top pt-3 " + indexStyles.indeximg} />
                <div className="card-title"><h2 className="font-weight-light">- Illustrations -</h2></div>
                </Link>
              </div>
              <div className={"card col-md-6 col-sm-12 pt-3 " + indexStyles.card}>
                <Link to="/works/webdesign">
                <Img sizes={webdesign} className={"card-img-top pt-3 " + indexStyles.indeximg} />
                <div className="card-title"><h2 className="font-weight-light">- Web design -</h2></div>
                </Link>
              </div>
            </div>

            <div className="row card-deck text-center mt-3">
              <div className={"card col-md-6 col-sm-12 pt-3 " + indexStyles.card}>
                <Link to="/works/graphicdesign">
                <Img sizes={graphicdesign} className={"card-img-top pt-3 " + indexStyles.indeximg} />
                <div className="card-title"><h2 className="font-weight-light">- Print design -</h2></div>
                </Link>
              </div>
              <div className={"card col-md-6 col-sm-12 pt-3 " + indexStyles.card}>
                <Link to="/works/smmdesign">
                <Img sizes={smm} className={"card-img-top pt-3 " + indexStyles.indeximg} />
                <div className="card-title"><h2 className="font-weight-light">- Designs for social media -</h2></div>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }

    illustr: file(relativePath: { eq: "cover/illustr.png" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    graphicdesign: file(relativePath: { eq: "cover/graphicdesign.png" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    webdesign: file(relativePath: { eq: "cover/webdesign.png" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    smm: file(relativePath: { eq: "cover/smm.png" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

  }
`
