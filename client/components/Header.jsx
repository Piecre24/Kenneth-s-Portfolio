import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { connect } from 'react-redux'
import { navigate } from '../action/index'

class header extends React.Component {
  home = () => {
    this.props.dispatch(navigate('home'))
  }

  project = () => {
    this.props.dispatch(navigate('project'))
  }

  skills = () => {
    this.props.dispatch(navigate('skills'))
  }

  render () {
    return (
      <>
        <header>
          <nav id="headNav" className="menuNav">
            <a href="#default" className="logo">Portfolio</a>
            <nav className="navbar">

              <a herf="#" onClick={this.home} className='link'>Home</a>
              <a herf="#" onClick={this.project} className='link'>Project</a>
              <a herf="#" onClick={this.skills} className='link'>Skills</a>

            </nav>
          </nav>
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
