import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'

class LockAppBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <AppBar
          title="unitylock"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    )
  }
}

// LockAppBar.propTypes = {}

export default LockAppBar
