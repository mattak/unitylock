import { connect }          from 'react-redux'
import LoginDialogComponent from '../components/LoginDialogComponent'
import login_dialog_action  from '../action_creators/LoginDialogAction'
import login                from '../action_creators/Login'

const mapStateToProps = (state) => {
  return {
    open: state.login_dialog_open,
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginRequest: (user) => {
      login(dispatch, user)
        .then(_ => { login_dialog_action(dispatch, false) })
    },
    onCancelRequest: () => {
      login_dialog_action(dispatch, false)
    },
  }
};

const LoginDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDialogComponent)

export default LoginDialog
