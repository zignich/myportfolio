import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import './contacts.scss'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutmeStyles from './aboutme.module.css'

import image1 from '../assets/images/cover/img_contacts.png'

const ContactsPage = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div>
        <section className="pt-4">
          <div className="container">

            <h1 className="font-weight-light text-center">Contact me</h1>
            <hr />
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div>
                  Feel free to contact me if you have any questions or if you just want to say 'Hello'
                </div> <br/>
                <div>
                  <FontAwesomeIcon icon="envelope-open-text" className="smallIcon"/>
                  <a href="mailto:zignich.ds@gmail.com" className="pl-1"> zignich.ds[at]gmail[dot]com</a>
                </div> <br/>
                <h3 className="font-weight-light pb-2">You can find me in social media:</h3>
                <div>
                  <FontAwesomeIcon icon={['fab', 'instagram']} className="smallIcon"/>
                  <a href="https://www.instagram.com/chingizds/" target="_blank" className="pl-1"> chingizds</a>
                </div>
                <div className="pt-2">
                  <FontAwesomeIcon icon={['fab', 'facebook']} className="smallIcon"/>
                  <a href="https://web.facebook.com/chingiz.dyu" target="_blank" className="pl-1"> chingiz.dyu</a>
                </div>

              </div>
              <img src={image1} className="col-md-6 col-sm-12"/>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ContactsPage

export const pageQuery = graphql`
  query ContactsQuery {
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
