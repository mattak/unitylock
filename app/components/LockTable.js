import React, { Component, PropTypes } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

class LockTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const list = this.props.list;
    return (
      <Table
        multiSelectable={true}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>User</TableHeaderColumn>
            <TableHeaderColumn>File</TableHeaderColumn>
            <TableHeaderColumn>Time</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map( (item, index) => (
            <TableRow key={index} selectable={item.user == null}>
              <TableRowColumn>{item.user}</TableRowColumn>
              <TableRowColumn>{item.file}</TableRowColumn>
              <TableRowColumn>{item.time}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

LockTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isDefined,
    file: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default LockTable
