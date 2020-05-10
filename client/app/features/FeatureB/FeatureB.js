// FeatureA

import React from 'react'
import PropTypes from 'prop-types'

const FeatureA = props => (
  <div>FeatureB: Hello {props.name}!</div>
)

FeatureA.defaultProps = {
  name: 'Frank'
}

FeatureA.propTypes = {
  name: PropTypes.string
}