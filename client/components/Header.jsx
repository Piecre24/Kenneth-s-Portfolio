import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export class header extends React.Component {
  render () {
    return (
      <>
        <header>
          <h1> Kenneth Capistrano Cruz</h1>
          <Router>
            <nav className="navbar">
              <ul>
                <li><Link to="/home">Profile</Link></li>
                <li><Link to="/projects">Profile</Link></li>
              </ul>
            </nav>
          </Router>
        </header>
      </>
    )
  }
}

export default header
