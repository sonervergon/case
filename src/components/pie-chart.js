import React, { Component } from 'react'
const PieChart = require('react-d3/piechart').PieChart;

export default class PieChartComponent extends Component {
  refineData(data) {
    const sum = data.map(input => { return input.value }).reduce( (acc, val) => { return acc+val })
    data.map(data => {
      data.value = Math.round(100*data.value/sum)
    })
    return data
  }
  render() {
    return (
      <div className="tile is-parent">
        <div className="tile is-child box">
          <PieChart
            className="pie-chart"
            data={this.refineData(this.props.data)}
            width={600}
            height={500}
            radius={100 + 10*this.props.data.length}
            innerRadius={30}
          />
        </div>
      </div>
    );
  }
}
