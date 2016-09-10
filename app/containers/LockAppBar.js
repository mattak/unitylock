import { connect }         from 'react-redux'
import LockAppBarComponent from '../components/LockAppBarComponent'
import search              from '../action_creators/Search'
import snack_message       from '../action_creators/SnackMessage'
import login_dialog_action from '../action_creators/LoginDialogAction'

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginClick: () => {
      login_dialog_action(dispatch, true)
    },
    onSyncClick: () => {
      search(dispatch)
        .then((_) => {
          snack_message(dispatch, 'synchronized');
        })
    },
  }
};

const LockAppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockAppBarComponent)

export default LockAppBar
