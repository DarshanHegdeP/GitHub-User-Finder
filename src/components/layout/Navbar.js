import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-danger text-white mb-4 p-3">
        <h4 className="m-0">GitHub</h4>

        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" >
              About
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
