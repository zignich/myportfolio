import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p>
        <strong>{title}</strong>
        <br />
        Creating designs and illustrations <br/>since 2009
      </p>
    </div>
  </div>
)

export default Footer
