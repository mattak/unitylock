import { connect }         from 'react-redux'
import LockAppBarComponent from '../components/LockAppBarComponent'
import search              from '../action_creators/Search'

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
    },
  }
};

const LockAppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockAppBarComponent)

export default LockAppBar
