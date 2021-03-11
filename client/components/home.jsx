import React from 'react'

export class home extends React.Component {
  render () {
    return (
      <>
        <div className = "content">
          <h2>Hi I’m Kenneth Cruz
          Developer</h2>
          <p>This is Website consist of <a href="https://reactjs.org/" className='reactLink'>React</a> and  <a href="https://redux.js.org/" className='reduxLink'>Redux </a></p>
          <h3>About Me</h3>
          <p>Full name is Kenneth Capistrano Cruz, born in the Philippines but raised in New Zealand often find myself talk more English than my native language. Though I am often curious about things I’m no knowledge of and would attempt to learn it in full details.</p>

          <p>One of my main goals in life is to make the earth a better place, and through the development of technology, I thoroughly believe that it could vastly improve society.</p>

        </div>

      </>
    )
  }
}

export default home
