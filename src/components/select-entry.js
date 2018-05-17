import React, { Component } from 'react'

export default class SelectEntry extends Component {
  changeSelection(value) {
    this.props.onSelect({entryValue: value})
  }
  render() {
    const items = this.props.data.map((item, index) => {
      return <option value={index} key={index}>{item.label}</option>
    })
    return (
      <div className="field is-pulled-left">
        <label className="label">Select: </label>
        <div className="select is-rounded" selected="choose">
          <select onChange={ (event) => this.changeSelection(event.target.value)} placeholder="Select entry" selected={0} id="entry-selector">
            { items }
          </select>
        </div>
      </div>
    );
  }
}
