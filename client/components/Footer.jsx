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

          This is the foot

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
