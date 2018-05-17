import React, {Component} from 'react'
import PieChartComponent from './pie-chart.js'
import AddData from './add-data'
import ChartProperties from './chart-properties'
const PieChart = require('react-d3/piechart').PieChart;

export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [
          {label: 'Margarita', value: 20.0},
          {label: 'John', value: 55.0},
          {label: 'Tim', value: 25.0 }
        ]
      }
    }
    setData(data) {
      this.setState( () => {
        return this.state.data.push(data)
      })
    }
    updateData(data) {
      this.setState(data)
    }
    render () {
        return (
          <div className="container">
            <h1 className="title">My piechart</h1>
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <AddData updateData={ data => this.setData(data) }/>
                <ChartProperties data={this.state.data} onDataChange={ data => this.updateData(data)} />
              </div>
              <PieChartComponent data={this.state.data} />
            </div>
          </div>
        );
    }
}
