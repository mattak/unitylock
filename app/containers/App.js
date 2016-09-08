import React, { Component, PropTypes } from 'react'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider'
import LockTable            from './LockTable'
import LockAppBar           from '../components/LockAppBar'

const App = () => (
  <div>
    <LockAppBar />
    <LockTable />
  </div>
)

export default App
