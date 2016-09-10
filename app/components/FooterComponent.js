import React, { Component, PropTypes } from 'react'
import FontIcon   from 'material-ui/FontIcon'
import Paper      from 'material-ui/Paper'
import {white, red500}  from 'material-ui/styles/colors'

export default class FooterComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      marginTop: '16px',
      background: '#AAAAAA',
      padding: '16px',
    }
    const divStyle = {
      color: 'white',
      display: 'table-cell',
      textAlign: 'center',
      fontSize: '16px',
    }
    const iconStyle = {
      paddingLeft: '8px',
      paddingRight: '8px',
      verticalAlign: 'middle',
    }

    return (
      <Paper style={style} zDepth={0}>
      <span style={divStyle}>
        <FontIcon className='muidocs-icon-custom-github' style={iconStyle} />
        <a href="https://github.com/mattak/unitylock">
            unitylock
        </a> is available from github
      </span>
      </Paper>
    )
  }
};
