import AppSnackBarComponent from '../components/AppSnackBarComponent'
import { connect }          from 'react-redux'

const mapStateToProps = (state) => {
  return {
    message: state.snack_message || '',
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

const AppSnackBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppSnackBarComponent)

export default AppSnackBar
