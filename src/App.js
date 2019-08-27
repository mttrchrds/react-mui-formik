import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/registration" component={Registration} />
    </Router>
  )
}

export default App;
