import { Projection } from 'leaflet'
import React from 'react'

export class project extends React.Component {
  render () {
    return (
      <>
        <div className = "content">
        This where my projects would be.
          <div className = "projects">
            <div className= "project1">
              <h2><a href="https://lishgo.herokuapp.com/#/" className='ListGo'>ListGo</a></h2>
              <ul>
                <li>App that list Music, Films and Books to a watch later list</li>
                <li>Uses 3 External APIs in different individual server organization</li>
                <li>Constructed within a week</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default project
