import React from 'react'
import { Route } from 'react-router-dom'

import home from './home'
import header from './Header'
import project from './project'

export class App extends React.Component {
  render () {
    return (
      <>
        <Route exact path ='/' component = {header}/>
        <Route exact path ='/' component = {home} />
        <Route excat path = '/' component = {project}/>

      </>
    )
  }
}

export default App
