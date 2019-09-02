import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import './Home.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 'auto',
    maxWidth: 500,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
})

const ListItemLink = ({ primary, secondary, to }) => (
  <ListItem button component={Link} to={to}>
    <ListItemText primary={primary} secondary={secondary} />
  </ListItem>
)

ListItemLink.propTypes = {
  primary: PropTypes.node.isRequired,
  secondary: PropTypes.node,
  to: PropTypes.string.isRequired,
}

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <List component="nav" className={classes.list}>
          <ListItemLink
            to="/login"
            primary="Authentication flow"
            secondary="Starting with a login form, a prototype UI for a website's authentication flow. Includes, login, registration and forgot password forms."
          />
          <Divider light />
          <ListItemLink to="/somewhere" primary="Second example" secondary="Some description text here of the second form example." />
        </List>
      </Paper>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
