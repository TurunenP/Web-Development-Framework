import React from 'react'

import "./App.css"


import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Homepage from './pages/Homepage'
import AdminDash from './pages/AdminDash';

function App() {
  
  
  return (
    
    <div>
        <Router>
          <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/admin' component={AdminDash}/>
          </Switch>
        </Router>

    </div>
  
  )
}

export default App


