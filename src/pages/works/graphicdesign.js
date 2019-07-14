import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

import image1 from '../../assets/images/cover/img_contacts.png'

const GraphicDesign = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Graphic design</h1>
            <hr />
            <div className="row">
              <img src={image1} className="col-md-12 col-sm-12"/>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default GraphicDesign

export const pageQuery = graphql`
  query GraphicdesignQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
  }
`
