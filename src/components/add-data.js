import React, { Component } from 'react'

export default class PieChartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleInputChange(str) {
    this.setState( {label: str, value: 10.0 } )
  }
  handleClick() {
    this.props.updateData(this.state)
  }
  render() {
    return (
      <div className="tile is-child box">
        <p className="title is-4">Add entries</p>
        <input onChange={ event => this.handleInputChange( event.target.value ) } className="input is-rounded" type="text" placeholder="Enter name"></input>
        <a onClick={ event => this.handleClick() } className="button is-success">Add</a>
      </div>
    );
  }
}
