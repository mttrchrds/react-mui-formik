import React from 'react'
import PropTypes from 'prop-types'

import './Divider.css'

const Divider = ({ label }) => {
  return (
    <div className="divider">
      <div className="divider__line" />
      <div className="divider__label">{label}</div>
    </div>
  )
}

Divider.propTypes = {
  label: PropTypes.string,
}

export default Divider
