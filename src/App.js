import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './Pages/Homepage'
import Protocol_2 from './Pages/Protocol_2/FrameTwoPages'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/protocollo-2' component={Protocol_2} />
      </Switch>
    </Router>
  )
}

export default App

