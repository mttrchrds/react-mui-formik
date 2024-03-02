import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
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
              Example React, Material UI and Formik login page
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.content}>
        <Login />
      </div>
    </div>
  )
}

export default App
