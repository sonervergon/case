import React, { Component } from 'react'
import SelectEntry from './select-entry'

export default class ChartProperties extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entryValue: 0,
      displayValue: 50
    }
  }
  handleSliderChange(sliderValue, {data}) {
    data[this.state.entryValue].value = +sliderValue
    this.setState({
      entryValue: this.state.entryValue,
      displayValue: +sliderValue
    })
    this.props.onDataChange(data)
  }
  handleClick({data}) {
    data.splice(this.state.entryValue, 1)
    this.props.onDataChange(data)
  }
  render() {
    return (
      <div className="tile is-child box">
        <p className="title is-4">Edit entries</p>
        <SelectEntry data={this.props.data} onSelect={value => {this.setState(value)}} />
        <span className="is-pulled-right label">Value: {this.state.displayValue}</span>
        <div className="slidecontainer">
          <input onChange={ (event) => this.handleSliderChange(event.target.value, this.props)}  type="range" min="0" max="100" className="slider" id="myRange"></input>
        </div>
        <a onClick={ event => this.handleClick(this.props) } className="is-pulled-right button is-danger">Delete entry</a>
      </div>
    );
  }
}
