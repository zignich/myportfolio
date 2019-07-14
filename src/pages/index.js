import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

//style module
import indexStyles from './index.module.scss'

import cover_illustr from '../assets/images/cover/illustration_cover.png'
import cover_web from '../assets/images/cover/webdesign_cover.png'
import cover_smm from '../assets/images/cover/smm_cover.png'
import cover_graphic from '../assets/images/cover/graphic_cover.png'

const IndexPage = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Hi and welcome to my portfolio!</h1>
            <hr className="pb-3"/>
            <div className="row card-deck text-center">
              <div className={"card col-md-6 col-sm-12 " + indexStyles.card}>
                <Link to="/works/illustrations/">
                <img src={cover_illustr} className={"card-img-top pt-3 " + indexStyles.indeximg}/>
                <div className="card-title"><h2 className="font-weight-light">- Illustrations -</h2></div>
                </Link>
              </div>
              <div className={"card col-md-6 col-sm-12 " + indexStyles.card}>
                <Link to="/works/webdesign">
                <img src={cover_web} className={"card-img-top pt-3 " + indexStyles.indeximg} />
                <div className="card-title"><h2 className="font-weight-light">- Web design -</h2></div>
                </Link>
              </div>
            </div>

            <div className="row card-deck text-center mt-3">
              <div className={"card col-md-6 col-sm-12 " + indexStyles.card}>
                <Link to="/works/graphicdesign">
                <img src={cover_graphic} className={"card-img-top pt-3 " + indexStyles.indeximg} />
                <div className="card-title"><h2 className="font-weight-light">- Graphic design -</h2></div>
                </Link>
              </div>
              <div className={"card col-md-6 col-sm-12 " + indexStyles.card}>
                <Link to="/works/smmdesign">
                <img src={cover_smm} className={"card-img-top pt-3 " + indexStyles.indeximg} />
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
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
