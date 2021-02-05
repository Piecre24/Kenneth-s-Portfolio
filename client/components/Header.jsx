import React from 'react'

export class header extends React.Component {
  render () {
    return (
      <>
        <header>
          <h1> Kenneth Capistrano Cruz</h1>
          <nav className="navbar">
            <ul>
              <li>about me</li>
              <li>projects</li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}

export default header
