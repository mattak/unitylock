import React, { Component, PropTypes } from 'react'
import SnackBar                        from 'material-ui/SnackBar'

class AppSnackBarComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SnackBar
        open={this.props.message !== ''}
        message={this.props.message}
        autoHideDuration={1000}
      />
    )
  }
}

AppSnackBarComponent.propTypes = {
  message: PropTypes.string.isRequired,
}

export default AppSnackBarComponent
