import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Divider from '../../Divider/Divider'

import './Login.css'

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
  },
  formTitle: {
    paddingBottom: theme.spacing(2),
  },
  rememberRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(3),
  },
  linkForgotPassword: {
    color: theme.palette.primary.main,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
})

const Login = ({ classes }) => {
  const [fieldEmail, setEmail] = useState('')
  const [fieldPassword, setPassword] = useState('')
  const [fieldSaveLogin, setSaveLogin] = useState(false)
  const [redirectRegistration, setRedirectRegistration] = useState(false)

  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleChangeSaveLogin = event => {
    setSaveLogin(event.target.checked)
  }

  const handleClickJoin = e => {
    e.preventDefault()
    setRedirectRegistration(true)
  }

  if (redirectRegistration) {
    return <Redirect to="/registration" />
  }

  return (
    <div className="login-page">
      <div className="login-panel">
        <Paper className={classes.paper}>
          <Typography align="center" variant="h5" className={classes.formTitle}>
            Login to your account
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="email"
              label="Email address"
              className={classes.textField}
              value={fieldEmail}
              onChange={handleChangeEmail}
              margin="normal"
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              value={fieldPassword}
              onChange={handleChangePassword}
              margin="normal"
              fullWidth
              required
              variant="outlined"
            />
            <FormGroup row className={classes.rememberRow}>
              <FormControlLabel
                control={<Checkbox color="primary" checked={fieldSaveLogin} onChange={handleChangeSaveLogin} />}
                label="Remember you"
              />
              <span className="link-forgot-password">
                <Link to="/forgot-password" className={classes.linkForgotPassword}>
                  Forgot your password?
                </Link>
              </span>
            </FormGroup>
            <Button variant="contained" color="primary" fullWidth size="large" type="submit">
              Login
            </Button>
            <div className="divider-container">
              <Divider label="or continue with" />
            </div>
            <div className="form-row-split">
              <Button variant="outlined" size="large" className={classes.margin} fullWidth>
                <img src={process.env.PUBLIC_URL + 'facebook-logo.svg'} alt="Facebook logo" className="icon icon--facebook" />
                Facebook
              </Button>
              <Button variant="outlined" size="large" className={classes.margin} fullWidth>
                <img src={process.env.PUBLIC_URL + 'google-logo.svg'} alt="Google logo" className="icon icon--google" />
                Google
              </Button>
            </div>
            <div className="divider-container">
              <Divider label="don't have an account?" />
            </div>
            <Button variant="contained" color="secondary" fullWidth size="large" type="button" onClick={handleClickJoin}>
              Create account
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
