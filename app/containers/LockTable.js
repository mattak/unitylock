import { connect }        from 'react-redux'
import LockTableComponent from '../components/LockTableComponent'
import search             from '../action_creators/Search'
import lock               from '../action_creators/Lock'
import unlock             from '../action_creators/Unlock'

const mapStateToProps = (state) => {
  return {
    list: state,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDataClick: (selectedData) => {
      console.log("selectedData: " + selectedData);

      // unlock
      if (selectedData['user']) {
        unlock(dispatch, 'FIXME:user', selectedData['file'])
      }
      else {
        // lock
        lock(dispatch, 'FIXME:user', selectedData['file'])
      }

      search(dispatch)
    }
  }
};

const LockTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockTableComponent)

export default LockTable
