import React from 'react'
import { Route } from 'react-router-dom'

import home from './home'
import header from './Header'

export class App extends React.Component {
  render () {
    return (
      <>
        <Route exact path ='/' component = {home} />
        <Route exact path ='/' component = {header}/>
      </>
    )
  }
}

export default App
