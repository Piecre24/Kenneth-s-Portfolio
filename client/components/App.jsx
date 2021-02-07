import React from 'react'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

import Home from './home'
import Header from './Header'
import Project from './project'

export class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Route exact path="/">
          <Redirect to="/welcome"/>
        </Route>
        <Route exact path='/welcome' component={Home} />
        <Route exact path='/projects' component={Project} />
      </>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    currentPage: store.currentPage
  }
}

// connects to all
export default connect(mapStateToProps)(App)
