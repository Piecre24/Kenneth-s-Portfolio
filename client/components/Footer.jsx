import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { connect } from 'react-redux'
import { navigate } from '../action/index'

class footer extends React.Component {
  render () {
    return (
      <>
        <div id="footer" className="footers">
          <p><a href="https://www.linkedin.com/in/kenneth-cruz-a2a712194/" className='link'>Linkedin</a></p>
          <p><a href="https://github.com/Piecre24" className='link'>Github</a></p>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(footer)
