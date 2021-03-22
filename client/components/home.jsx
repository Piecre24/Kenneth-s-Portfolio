import React from 'react'

// import Logo from '../../server'

export class home extends React.Component {
  render () {
    return (
      <>
        <div className = "content">
          <h2>Hi I’m Kenneth Cruz a
          Developer</h2>
          <div className = 'content-consistOf'>
            <p>This is Website consist of
              <a href="https://reactjs.org/" className='reactLink'> React</a>, Webpack and
              <a href="https://redux.js.org/" className='reduxLink'> Redux </a>.</p>
          </div>
          {/* <img src={Logo} alt="Logo" /> */}
        </div>

      </>
    )
  }
}

export default home
