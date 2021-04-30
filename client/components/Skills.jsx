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
                <p>Using Javascript or C/C++, I can fondle other programming languages to my curiosity, such as Java or Python.
                  With this skill, I can create all sorts of software that I desire.</p>
              </li>
              <li><img src={techsavyImg} alt="Logo" width='50' height='50'/><h5>Tech Savy</h5>
                <p>Interested in tech, always attempt to be updated with the latest computer components like GPUs and CPUs. As
                  a mechanical keyboard fan, I prefer blue switches.</p>
              </li>
              <li><img src={teamplayerImg} alt="Logo" width='50' height='50'/><h5>Team player</h5>
                <p>Always try to be supportive of my team in basketball or in video games. Not stealing the spotlight or
                  trying to go in solo; if the team fails, I fail.</p>
              </li>
            </ul>

            <ul className= 'main-skilllist2'>
              <li><img src={volunteerImg} alt="Logo" width='50' height='50'/><h5>Volunteer</h5>
                <p>I inspire to become more considerate to others by helping who are those in need. Participated in
                  volunteering work to clean parks and donate blood; it gives me the joy to see that I've helped people.</p>
              </li>
              <li><img src={kindImg} alt="Logo" width='50' height='50'/><h5>Kind</h5>
                <p>I'm always kind, or I attempt to be; I don't like to have a negative relationship with anyone as conflict
                  can lead to poor performance to work. </p>
              </li>
              <li><img src={fitnessImg} alt="Logo" width='50' height='50'/><h5>Fitness</h5>
                <p>Gym frequently, not just for my health but also for the challenge. Always try to improve
                  me mentally and physically. I participate in sports and runs, attempting different types of
                  athletic activities like Crossfit. </p>
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
