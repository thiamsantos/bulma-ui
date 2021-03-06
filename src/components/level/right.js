import React from 'react'
import PropTypes from 'prop-types'

const Right = ({children, ...props}) => (
  <div className="level-right" {...props}>
    {children}
  </div>
)

Right.propTypes = {
  children: PropTypes.node.isRequired
}

export default Right
