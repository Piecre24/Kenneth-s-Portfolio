import React from 'react'

// images
// import meprofile from './me_Kenneth.jpg'

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
            {/* return <img src={meprofile} alt="Kenneth" /> */}

          </div>

        </div>

      </>
    )
  }
}

export default home
