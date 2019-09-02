import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Home from './components/Home/Home'
import Login from './components/authentication/Login/Login'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  nav: {
    marginBottom: theme.spacing(3),
  },
  content: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const App = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.nav}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              React Material UI with Formik examples
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.content}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    </div>
  )
}

export default App
