import { connect }         from 'react-redux'
import LockAppBarComponent from '../components/LockAppBarComponent'

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginClick: () => {
      console.log("onLockClick");
    },
    onSyncClick: () => {
      console.log("onSyncClick");
    },
  }
};

const LockAppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockAppBarComponent)

export default LockAppBar
