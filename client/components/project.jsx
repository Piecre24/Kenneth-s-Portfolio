import React from 'react'

import ListGo from '../../server/public/image/list_go.png'
import BoiPlate from '../../server/public/image/boiler_plate.png'
import RetailPlate from '../../server/public/image/retail_plate.png'

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
              <div className= "button-project">
                <a href="https://lishgo.herokuapp.com/#/" className='ListGo'>Open</a>
                <a href="https://github.com/Piecre24/Liszt" className='kenBoilerPlate'>Code</a>
              </div>
              <div className = 'project-images'><img src={ListGo} alt="Listgo-image" width="600" height="400"/></div>
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
                <a href= "https://boilerplatekenny.herokuapp.com/#/" className='BoilerPlate'>Open</a>
                <a href="https://github.com/Piecre24/Kenny-sBoilerPlate" className='kenBoilerPlate'>Code</a>
              </div>
              <div className = 'project-images'><img src={BoiPlate} alt="Listgo-image" width="600" height="400"/></div>
            </div>

            <div className= "project">
              <h2>Retail Web Prototype</h2>
              <ul>
                <li>Add Cart functionality</li>
                <li>Can use for Mobile and Desktop</li>
                <li>Can be use as the Template</li>
                <li>Deployed and consist of Redux, React and Webpack (etc)</li>
              </ul>
              <div className= "button-project">
                <a href="https://mrretialstore.herokuapp.com/" className='ListGo'>Open</a>
                <a href="https://github.com/Piecre24/MRRetialStore" className='kenBoilerPlate'>Code</a>
              </div>
              <div className = 'project-images'><img src={RetailPlate} alt="retailplate-image" width="600" height="400"/></div>
            </div>

          </div>

        </div>
      </>
    )
  }
}

export default project
