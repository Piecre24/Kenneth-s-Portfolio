import { Projection } from 'leaflet'
import React from 'react'

export class project extends React.Component {
  render () {
    return (
      <>
        <div className = "content">
          <div className = "projects">
            <div className= "project">
              <h2>ListGo</h2>
              <ul>
                <li>App that list Music, Films and Books to a watch later list</li>
                <li>Uses 3 External APIs in different individual server organization</li>
                <li>Constructed within a week</li>
              </ul>
            </div>
            <div className= "button-project">
              <a href="https://lishgo.herokuapp.com/#/" className='ListGo'>Open</a>
              <a href="https://github.com/Piecre24/Liszt" className='kenBoilerPlate'>Code</a>
            </div>

            <div className= "project">
              <h2>BoilerPlate</h2>
              <ul>
                <li>Usable for FullStack projects</li>
                <li>Cosntructed by scratch</li>
                <li>Open source usable for anyone </li>
                <li>Consist of scripts for CLI commands (testing functionality)</li>
              </ul>
              <div className= "button-project">
                <a>Open</a>
                <a href="https://github.com/Piecre24/Kenny-sBoilerPlate" className='kenBoilerPlate'>Code</a>
              </div>

            </div>
            <div className= "project">
              <h2>Portfolio</h2>
              <ul>
                <li>Its about me</li>
              </ul>
            </div>
            <div className= "button-project">
              <a href="" className='ListGo'>Open</a>
              <a href="" className='kenBoilerPlate'>Code</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default project
