import { Projection } from 'leaflet'
import React from 'react'

export class project extends React.Component {
  render () {
    return (
      <>
        <div className = "content">
          <div className = "projects">
            <div className= "project1">
              <h2><a href="https://lishgo.herokuapp.com/#/" className='ListGo'>ListGo</a></h2>
              <ul>
                <li>App that list Music, Films and Books to a watch later list</li>
                <li>Uses 3 External APIs in different individual server organization</li>
                <li>Constructed within a week</li>
              </ul>
            </div>
            <div className= "project2">
              <h2><a href="https://github.com/Piecre24/Kenny-sBoilerPlate" className='kenBoilerPlate'>BoilerPlate</a></h2>
              <ul>
                <li>Usable for FullStack projects</li>
                <li>Cosntructed by scratch</li>
                <li>Open source usable for anyone </li>
                <li>Consist of scripts for CLI commands (testing functionality)</li>
              </ul>
            </div>
            <div className= "project3">
              <h2><a href="https://github.com/Piecre24/Kenneth-s-Portfolio/tree/main/client" className='kenPortfolio'>Portfolio</a></h2>
              <ul>
                <li>Its about me</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default project
