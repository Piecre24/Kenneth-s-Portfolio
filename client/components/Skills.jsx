import React from 'react'

import progammingImg from '../../server/public/image/coding.png'
import techsavyImg from '../../server/public/image/techsavy.png'
import teamplayerImg from '../../server/public/image/teamplayer.png'
import volunteerImg from '../../server/public/image/volunteer.png'
import kindImg from '../../server/public/image/kind.png'
import fitnessImg from '../../server/public/image/fitness.png'

export class skills extends React.Component {
  render () {
    return (
      <>
        <div className= 'skills-content'>
          <div className= 'title-skill'>
            <h2>My Skills</h2>
            <h3>I do all kinds of neat stuff</h3>
          </div>

          <div className='main-skills'>
            <ul className= 'main-skilllist1'>
              <li><img src={progammingImg} alt="Logo" width='50' height='50'/><h5>Programming</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
               at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
              </li>
              <li><img src={techsavyImg} alt="Logo" width='50' height='50'/><h5>Tech Savy</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
               at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
              </li>
              <li><img src={teamplayerImg} alt="Logo" width='50' height='50'/><h5>Team player</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
               at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
              </li>
            </ul>

            <ul className= 'main-skilllist2'>
              <li><img src={volunteerImg} alt="Logo" width='50' height='50'/><h5>Volunteer</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
               at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
              </li>
              <li><img src={kindImg} alt="Logo" width='50' height='50'/><h5>Kind</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
               at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
              </li>
              <li><img src={fitnessImg} alt="Logo" width='50' height='50'/><h5>Fitness</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
               at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
              </li>
            </ul>
          </div>
          <div className = 'extra-skills'>
            <div className= 'title-skill'>
              <h3>Other skills</h3>
            </div>
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
