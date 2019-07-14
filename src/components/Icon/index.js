import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faInstagram,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

import {
  faEnvelopeOpenText,
  faSquare
 } from '@fortawesome/free-solid-svg-icons'

library.add(
  faSquare,
  faEnvelopeOpenText,
  faApple,
  faAws,
  faFacebook,
  faInstagram,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
)

const Icon = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={['fab', name]} />
  </div>
)

export default Icon
