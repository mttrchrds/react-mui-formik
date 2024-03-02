import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'

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
  label: {
    fontSize: 'inherit',
  },
})

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Enter an email address'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(64, 'Cannot be longer than 64 characters')
    .required('Enter a password'),
})

const Login = ({ classes }) => {
  const [fieldSaveLogin, setSaveLogin] = useState(false)

  const handleChangeSaveLogin = event => {
    setSaveLogin(event.target.checked)
  }

  const handleClickJoin = e => {
    e.preventDefault()
    console.log('Redirect would happen here')
  }

  return (
    <div className="login-page">
      <div className="login-panel">
        <Paper className={classes.paper}>
          <Typography align="center" variant="h5" className={classes.formTitle}>
            Login to your account
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log('Submitted values', values)
              setSubmitting(true)
              setTimeout(() => {
                // Mimic half a second wait
                resetForm()
                setSubmitting(false)
              }, 500)
            }}>
            {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  id="email"
                  label="Email address"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  helperText={touched.email ? errors.email : ''}
                  error={errors.email && touched.email ? true : false}
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password ? errors.password : ''}
                  error={errors.password && touched.password ? true : false}
                />
                <FormGroup row className={classes.rememberRow}>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={fieldSaveLogin} onChange={handleChangeSaveLogin} />}
                    label="Remember you"
                    classes={{
                      label: classes.label,
                    }}
                  />
                  <span className="link-forgot-password">
                    <a href="#" className={classes.linkForgotPassword}>
                      Forgot your password?
                    </a>
                  </span>
                </FormGroup>
                <Button variant="contained" color="primary" fullWidth size="large" type="submit" disabled={isSubmitting}>
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
            )}
          </Formik>
        </Paper>
      </div>
    </div>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
