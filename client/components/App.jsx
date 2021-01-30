import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './home'
import Header from './Header'
import Project from './project'

const App = (props) => {
  return (
    <>

      <Header />
      {props.currentPage === 'home' ? <Home /> : props.currentPage === 'project' ? <Project /> : <Home /> }

    </>
  )
}

const mapStateToProps = (store) => {
  return {
    currentPage: store.currentPage
  }
}

// connects to all
export default connect(mapStateToProps)(App)
