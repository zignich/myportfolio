import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

import image1 from '../../assets/images/illustrations/illustr_1.jpg'
import image2 from '../../assets/images/illustrations/illustr_2.jpg'
import image3 from '../../assets/images/illustrations/illustr_3.jpg'
import image4 from '../../assets/images/illustrations/illustr_4.jpg'
import image5 from '../../assets/images/illustrations/illustr_5.jpg'
import image6 from '../../assets/images/illustrations/illustr_6.jpg'
import image7 from '../../assets/images/illustrations/illustr_7.jpg'
import image8 from '../../assets/images/illustrations/illustr_8.jpg'

const IllustrationsPage = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">
            <h1 className="font-weight-light text-center">Illustrations</h1>
            <hr />
            <div className="row">
              <img src={image1} className="col-md-12 col-sm-12"/>
              <img src={image2} className="col-md-12 col-sm-12"/>
              <img src={image3} className="col-md-12 col-sm-12"/>
              <img src={image4} className="col-md-12 col-sm-12"/>
              <img src={image5} className="col-md-12 col-sm-12"/>
              <img src={image6} className="col-md-12 col-sm-12"/>
              <img src={image7} className="col-md-12 col-sm-12"/>
              <img src={image8} className="col-md-12 col-sm-12"/>
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
        twitter
        adsense
      }
    }
  }
`
