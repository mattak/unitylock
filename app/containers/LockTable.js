import { connect }        from 'react-redux'
import LockTableComponent from '../components/LockTableComponent'
import search             from '../action_creators/Search'
import lock               from '../action_creators/Lock'
import unlock             from '../action_creators/Unlock'

const mapStateToProps = (state) => {
  return {
    list: state['data'],
    user: state['user'] || 'sample_user',
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDataClick: (user, selectedData) => {
      if (user == null || user == '') {
        console.warn("user not defined");
        return;
      }

      let dataFile = selectedData['file']
      let dataUser = selectedData['user']

      // unlock
      if (dataUser) {
        unlock(dispatch, user, dataFile)
          .then((it) => { search(dispatch) })
      }
      // lock
      else {
        lock(dispatch, user, dataFile)
          .then((it) => { search(dispatch) })
      }
    }
  }
};

const LockTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockTableComponent)

export default LockTable
