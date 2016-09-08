import React, { Component, PropTypes } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

class LockTableComponent extends Component {
  constructor(props) {
    super(props)
    this.handleOnCellClick = this.handleOnCellClick.bind(this);
  }

  handleOnCellClick(index) {
    let selectedData = this.props.list[index];
    this.props.onDataClick(this.props.user, selectedData);
  }

  render() {
    const _data = this.props.list;
    const _user = this.props.user;
    this.data   = _data;

    return (
      <Table
        multiSelectable={false}
        onCellClick={this.handleOnCellClick}
      >
        <TableHeader enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn>User</TableHeaderColumn>
            <TableHeaderColumn>File</TableHeaderColumn>
            <TableHeaderColumn>Time</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {_data.map( (item, index) => (
            <TableRow key={index} selectable={item.user == null || item.user == _user}>
              <TableRowColumn>{item.user}</TableRowColumn>
              <TableRowColumn>{item.file}</TableRowColumn>
              <TableRowColumn>{item.updated_at}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

LockTableComponent.propTypes = {
  user: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    user:       PropTypes.string.isDefined,
    file:       PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDataClick: PropTypes.func.isRequired,
}

export default LockTableComponent
