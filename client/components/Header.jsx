import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

export class header extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <>
        <header>
          <h1> Kenneth Capistrano Cruz</h1>
          <Router>
            <nav className="navbar">
              <ul>
                <li><Link to="/welcome">Profile</Link></li>
                <li><Link to="/projects">Project</Link></li>
              </ul>
            </nav>
          </Router>
        </header>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(header)
