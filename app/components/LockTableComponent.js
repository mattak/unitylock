import React, { Component, PropTypes } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

class LockTableComponent extends Component {
  constructor(props) {
    super(props)
    this.data = [];
    this.handleOnCellClick = this.handleOnCellClick.bind(this);
  }

  handleOnCellClick(index) {
    let selectedData = this.props.list[index];
    this.props.onDataClick(selectedData);
  }

  render() {
    const _data = this.props.list;
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
            <TableRow key={index} selectable={item.user == null}>
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
  list: PropTypes.arrayOf(PropTypes.shape({
    user:       PropTypes.string.isDefined,
    file:       PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDataClick: PropTypes.func.isRequired,
}

export default LockTableComponent
