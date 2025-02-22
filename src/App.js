import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Pages/Homepage'
import Protocol_2 from './Pages/Protocol_2/FrameTwoPages'
import Protocol_1 from './Pages/Protocol_1/FrameTwoPages'
import Protocol_3 from './Pages/Protocol_3'
import Protocol_4 from './Pages/Protocol_4'
import Jinx from './Pages/Protocol_1/imagesJinx/JinxTest/JinxSky'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/protocollo-1' component={Protocol_1} />
        <Route exact path='/protocollo-2' component={Protocol_2} />
        <Route exact path='/protocollo-3' component={Protocol_3} />
        <Route exact path='/protocollo-4' component={Protocol_4} />
        <Route exact path='/img' component={Jinx} />
      </Switch>
    </Router>
  )
}

export default App


// function App() {
//   return (
//     <Homepage />
//   );
// }

// export default App;