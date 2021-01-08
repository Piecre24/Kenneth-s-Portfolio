import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import home from './home'
import header from './Header'
import project from './project'

export class App extends React.Component {
  render () {
    return (
      <>

        <Route exact path ='/' component = {header}/>
        {/* <Route exact path ='/' component = {home} />
        <Route excat path = '/' component = {project}/> */}
        {this.props.currentPage === 'Home' ? < home /> : <project />}

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
