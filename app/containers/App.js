import React, { Component, PropTypes } from 'react'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider'
import LockTable            from './LockTable'
import LockAppBar           from './LockAppBar'
import AppSnackBar          from './AppSnackBar'
import LoginDialog          from './LoginDialog'

const App = () => (
  <div>
    <LockAppBar />
    <LockTable />
    <AppSnackBar />
    <LoginDialog />
  </div>
)
export default App
