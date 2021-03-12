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
          <ul className= "linkIcons">
            <li className = "linkIcon">
              <a href="https://www.linkedin.com/in/kenneth-cruz-a2a712194/" className="fa fa-linkedin"></a>
            </li>
            <li className = "linkIcon">
              <a href="https://github.com/Piecre24" className="fa fa-github"></a>
            </li>
          </ul>
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
