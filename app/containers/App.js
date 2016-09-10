import React, { Component, PropTypes } from 'react'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider'
import LockTable            from './LockTable'
import LockAppBar           from './LockAppBar'
import AppSnackBar          from './AppSnackBar'

const App = () => (
  <div>
    <LockAppBar />
    <LockTable />
    <AppSnackBar />
  </div>
)
export default App
