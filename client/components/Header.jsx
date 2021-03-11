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
          <nav id="headNav" className="menuNav">
            <h1> Portfolio</h1>
            <nav className="navbar">
              <ul className="linksHeader">
                <li className="iconHeader"> <a herf="#" onClick={this.home} className='link'>Home</a></li>
                <li className="iconHeader"> <a herf="#" onClick={this.project} className='link'>Project</a></li>
              </ul>

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
