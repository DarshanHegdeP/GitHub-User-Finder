import React from 'react'

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm rounded-4 p-4">
        <div className="card-body">
          <h2 className="card-title mb-3 text-primary">
            GitHub User Finder
          </h2>

          <p className="card-text fs-5">
            GitHub User Finder is a React application that allows users to
            search and explore GitHub profiles using the GitHub public API.
          </p>

          <hr />

          <h5 className="mt-3">🚀 Features</h5>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              🔍 Search GitHub users by username
            </li>
            <li className="list-group-item">
              👤 View profile details and avatars
            </li>
            <li className="list-group-item">
              ⚡ Fast and responsive UI using React & Bootstrap
            </li>
            <li className="list-group-item">
              📱 Mobile-friendly design
            </li>
          </ul>

          <h5 className="mt-3">🛠 Tech Stack</h5>
          <p>
            <span className="badge bg-dark me-2">React</span>
            <span className="badge bg-primary me-2">Bootstrap</span>
            <span className="badge bg-success me-2">Axios</span>
            <span className="badge bg-secondary me-2">GitHub API</span>
          </p>

          <p className="mt-4 text-muted">
            Version 1.0.0
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
