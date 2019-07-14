import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import aboutmeStyles from './aboutme.module.css'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import image1 from '../../content/images/cover/about.png'

const AboutMe = ({ data, location }) => {
  const image1 = get(data, 'image1.childImageSharp.sizes')

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">

            <h1 className="font-weight-light text-center">About me</h1>
            <hr />
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <Img sizes={image1} className="mt-3 mb-3" />
              </div>
              <div className="col-md-6 col-sm-12">
                Hi, my name is Chingiz.<br/>
                I'm a graphic designer, illustrator and animator from
                Kazakhstan, Almaty.<br/>
                <h2 className="font-weight-light pt-2 pb-0 mb-0">Skills:</h2>
                <ul className={aboutmeStyles.ul}>
                <li className={aboutmeStyles.skills}>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/> - illustration
                </li>
                <li className={aboutmeStyles.skills}>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconGreen}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/> - graphic design
                </li>
                <li className={aboutmeStyles.skills}>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/> - web design
                </li>
                <li className={aboutmeStyles.skills}>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/> - 2D animation
                </li>
                <li className={aboutmeStyles.skills}>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIcon}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/>
                <FontAwesomeIcon icon="square" className={aboutmeStyles.skillIconEmpty}/> - 3D modelling
                </li>
                </ul>

              </div>
            </div>
            <div className="text-center">
              <h2 className="font-weight-light pt-3">List of software I work in:</h2>
              Photoshop, Inkscape, Illustrator, CorelDraw, Blender3D, Adobe Animate (flash)

            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query AboutQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    image1: file(relativePath: { eq: "cover/about.png" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
