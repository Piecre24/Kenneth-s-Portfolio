import React from 'react'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Redirect,
  Route

} from 'react-router-dom'

import { browserHistory } from 'react-router'

import Home from './home'
import Header from './Header'
import Project from './project'

const App = (props) => {
  return (
    <div className='app'>
      <Header />
      {props.currentPage === 'listing' ? <Home /> : <Project />}
    </div>
  )
}

/* Using class is a hassle and I require help for this */

// export class App extends React.Component {
//   componentDidMount () {

//   }

//   render () {
//     const { page } = this.props
//     return (
//       <>

//         <div className='app'>
//           <Header />
//           <main>
//             {page.currentPage === 'listing' ? <Home /> : <Project />}
//           </main>
//         </div>

//       </>
//     )
//   }
// }

const mapStateToProps = (store) => {
  return {
    currentPage: store.activePage
  }
}

// connects to all
export default connect(mapStateToProps)(App)
