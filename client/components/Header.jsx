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

  render () {
    return (
      <>
        <header>
          <h1> Kenneth Capistrano Cruz</h1>

          <nav className="navbar">
            <a herf="#" onClick={this.home} className='link'>Home</a>
            <a herf="#" onClick={this.project} className='link'>Project</a>

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
