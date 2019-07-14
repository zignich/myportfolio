import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-row flex-md-row bg-primary navfixed">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>

          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/aboutme/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/aboutme/" className="nav-link">
                  About me
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/contacts/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/contacts/" className="nav-link">
                  Contacts
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

export default Navi
