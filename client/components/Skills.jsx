import React from 'react'

export class skills extends React.Component {
  render () {
    return (
      <>
        <div className= 'skills-content'>

          <h2>My Skills</h2>
          <h3>I do all kinds of neat stuff</h3>
          <div className='main-skills'>
            <ul>
              <li>Programming</li>
              <li>Tech Savy</li>
              <li>Team player</li>
              <li>Volunteer</li>
              <li>Kind</li>
              <li>Fitness</li>
            </ul>
          </div>
          <div className = 'extra-skills'>
            <ul>
              <li>Agile Methodology</li>
              <li>Human Skills</li>
              <li>React</li>
              <li>Node.JS</li>
              <li>JavaScript </li>
              <li>GitHub</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Heroku Deployment</li>
            </ul>
          </div>

        </div>
      </>
    )
  }
}

export default skills
