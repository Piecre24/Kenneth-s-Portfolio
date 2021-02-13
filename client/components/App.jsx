import React from 'react'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Redirect,
  Route

} from 'react-router-dom'

import { browserHistory } from 'react-router'

import Home from './home'
import Header from './Header'
import Project from './project'

export class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <>
        <Router history={browserHistory}>

          <div className='app'>
            <Header />
            <main>
              <Route exact path="/" component={Home}>
                <Redirect to="/home"/>
              </Route>
              <Route exact path='/projects' component={Project} />
            </main>
          </div>

        </Router>
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
