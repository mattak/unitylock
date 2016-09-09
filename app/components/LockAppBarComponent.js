import React, { Component, PropTypes } from 'react'
import IconButton       from 'material-ui/IconButton'
import AppBar           from 'material-ui/AppBar'
import NotificationSync from 'material-ui/svg-icons/notification/sync'
import AccountCircle    from 'material-ui/svg-icons/action/account-circle'
import { white }        from 'material-ui/styles/colors'

class LockAppBarComponent extends Component {
  constructor(props) {
    super(props)
    this.handleOnLoginClick = this.handleOnLoginClick.bind(this);
    this.handleOnSyncClick = this.handleOnSyncClick.bind(this);
  }

  handleOnLoginClick() {
    console.log("onLoginClick");
  }

  // event: object, isKeyboardFocused: boolean
  handleOnSyncClick() {
    console.log("onSyncClick");
  }

  render() {
    const styles = {
      medium: {
        width: 96,
        height: 96,
        padding: 16,
      },
      mediumIcon: {
        width: 48,
        height: 48,
      }
    }

    return (
        <AppBar
          title="unitylock"
          iconElementRight={
            <span>
              <IconButton onTouchTap={this.handleOnSyncClick}>
                <NotificationSync color={white} />
              </IconButton>
              <IconButton onTouchTap={this.handleOnLoginClick}>
                <AccountCircle color={white} />
              </IconButton>
            </span>
          }
        />
    )
  }
}

LockAppBarComponent.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onSyncClick:  PropTypes.func.isRequired,
}

export default LockAppBarComponent
