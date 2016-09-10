import React, { Component, PropTypes } from 'react'
import Dialog                          from 'material-ui/Dialog'
import FlatButton                      from 'material-ui/FlatButton'
import RaisedButton                    from 'material-ui/RaisedButton'
import TextField                       from 'material-ui/TextField'

class LoginDialogComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
    }
    this.handleOnLoginClick = this.handleOnLoginClick.bind(this)
    this.handleOnTextChange = this.handleOnTextChange.bind(this)
  }

  handleOnLoginClick() {
    this.props.onLoginRequest(this.state.user)
  }

  handleOnTextChange(event) {
    this.setState({
      user: event.target.value,
    })
  }

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.props.onCancelRequest}
        />,
      <FlatButton
        label="Login"
        primary={true}
        onTouchTap={this.handleOnLoginClick}
        />,
    ]

    return (
        <div>
          <Dialog
              title='Login'
              actions={actions}
              modal={false}
              open={this.props.open}
              >
            Input your name:
            <br/>
            <TextField
              id='text-field-controlled'
              hintText='User Name'
              value={this.state.user}
              onChange={this.handleOnTextChange}
              />
          </Dialog>
        </div>
    )
  }
}

LoginDialogComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
  onLoginRequest: PropTypes.func.isRequired,
  onCancelRequest: PropTypes.func.isRequired,
}

export default LoginDialogComponent
