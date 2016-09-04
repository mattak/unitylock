import React, { Component, PropTypes } from 'react'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider'
import LockTable            from '../components/LockTable'
import LockAppBar           from '../components/LockAppBar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var state = this.props.state
    return (
      <MuiThemeProvider>
        <div>
          <LockAppBar/>
          <LockTable list = {state} />
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  state: PropTypes.any.isRequired
}

export default App
