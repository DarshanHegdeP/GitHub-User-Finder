import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-danger text-white mb-4 px-4 py-3">
        <div className="container-fluid">
          <h4 className="m-0 text-white">GitHub</h4>

          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <i className="bi bi-house-door "></i>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                <i className="bi bi-info-circle me-1"></i>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
