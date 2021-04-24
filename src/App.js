import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './Pages/Homepage'
import Protocol_2 from './Pages/Protocol_2/FrameTwoPages'
import Protocol_1 from './Pages/Protocol_1/FrameTwoPages'
import Protocol_3 from './Pages/Protocol_3'
import Jinx from './Pages/Protocol_1/imagesJinx/JinxTest/JinxSky'
import './App.css'

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path='/' component={Homepage} />
//         <Route exact path='/protocollo-1' component={Protocol_1} />
//         <Route exact path='/protocollo-2' component={Protocol_2} />
//         <Route exact path='/protocollo-3' component={Protocol_3} />
//         <Route exact path='/img' component={Jinx} />
//       </Switch>
//     </Router>
//   )
// }

// export default App


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Homepage />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;