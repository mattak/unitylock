import LoginDialogComponent from '../components/LoginDialogComponent'
import login_dialog_action  from '../action_creators/LoginDialogAction'
import { connect }          from 'react-redux'

const mapStateToProps = (state) => {
  return {
    open: state.login_dialog_open,
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginRequest: (user) => {
      login_dialog_action(dispatch, false)
    },
  }
};

const LoginDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDialogComponent)

export default LoginDialog
