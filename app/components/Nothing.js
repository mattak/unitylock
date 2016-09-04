import React, { Component, PropTypes } from 'react'

class Nothing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onNothing } = this.props
    return (
      <p>
      </p>
    )
  }
}

Nothing.propTypes = {
  value:     PropTypes.number.isRequired,
  onNothing: PropTypes.func.isRequired
}

export default Nothing
