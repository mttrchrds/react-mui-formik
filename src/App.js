import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={Registration} />
      </Router>
    </>
  )
}

export default App;
