import React, { Component, PropTypes } from 'react'
import Dialog                          from 'material-ui/Dialog'
import FlatButton                      from 'material-ui/FlatButton'
import RaisedButton                    from 'material-ui/RaisedButton'
import TextField                       from 'material-ui/TextField'

class LoginDialogComponent extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const actions = [
      <FlatButton
        label="Login"
        primary={true}
        onTouchTap={this.props.onLoginRequest}
        />,
    ]

    return (
        <div>
          <Dialog
            title="Login"
            actions={actions}
            modal={false}
            open={this.props.open}
            >
            Input Your Name:
            <br/>
            <TextField
              id="text-field-login"
              hintText="User Name"
              defaultValue={this.props.user}
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
}

export default LoginDialogComponent
