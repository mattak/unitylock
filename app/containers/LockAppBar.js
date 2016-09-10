import { connect }         from 'react-redux'
import LockAppBarComponent from '../components/LockAppBarComponent'
import search              from '../action_creators/Search'
import snackmessage        from '../action_creators/SnackMessage'

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginClick: () => {
      console.log("onLockClick");
    },
    onSyncClick: () => {
      search(dispatch)
        .then((_) => {
          snackmessage(dispatch, 'synchronized');
        })
    },
  }
};

const LockAppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockAppBarComponent)

export default LockAppBar
