import React from 'react'
import { Route } from 'react-router-dom'

import home from './home'

export class App extends React.Component {
  render() {
    return (
      <>
        <Route exact path ='/' component = {home} />
      </>
    )
  }
}

export default App