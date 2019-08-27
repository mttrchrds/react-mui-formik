import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import './Home.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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
};

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <List component="nav">
          <ListItemLink to="/registration" primary="Registration form" secondary="A description about registration form" />
        </List>
      </Paper>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)