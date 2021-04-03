import React from 'react'

import Kenneth from '../../server/public/image/me_Kenneth.png'

export class home extends React.Component {
  render () {
    return (
      <>
        <div className = "content">

          <div className = 'home-content'>

            <div className = 'content-consistOf'>
              <h2>Hi I’m Kenneth Cruz a
          Software Developer</h2>
              <p>This is Website consist of
                <a href="https://reactjs.org/" className='reactLink'> React</a>, Webpack and
                <a href="https://redux.js.org/" className='reduxLink'> Redux </a>.</p>
            </div>
            <div className = 'image-placing'>
              <div className = 'home-profileimage' ><img src={Kenneth} alt="Logo" /></div>
            </div>

          </div>

        </div>

      </>
    )
  }
}

export default home
