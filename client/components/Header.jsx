import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { connect } from 'react-redux'
import { navigate } from '../action/index'

class header extends React.Component {
  submit = () => {
    this.props.dispatch(navigate('project'))
  }

  render () {
    return (
      <>
        <header>
          <h1> Kenneth Capistrano Cruz</h1>

          <nav className="navbar">
            <a herf="#" onClick={this.submit} className='link'>Home</a>
            <a herf="#" onClick={this.submit} className='link'>Project</a>
            <td><button><span className="fa fa-trash fa-2x"></span></button></td>

          </nav>

        </header>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(header)

// export class header extends React.Component {
//   componentDidMount () {

//   }

//   render () {
//     return (
//       <>
//         <header>
//           <h1> Kenneth Capistrano Cruz</h1>
//           <Router>
//             <nav className="navbar">
//               <ul>
//                 <li><Link to="/welcome">Profile</Link></li>
//                 <li><Link to="/projects">Project</Link></li>
//               </ul>
//             </nav>
//           </Router>
//         </header>
//       </>
//     )
//   }
// }
