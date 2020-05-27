import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class CompanyChart extends Component {
  render() {
    const data = this.props.data
    if (data === undefined || typeof data === null) {
      return null
    }

    return (
      <div>
        Chart
        <Line
          data={{
            labels: data.map(item => item.date.split(" ")[1]),
            datasets: [
              {
                label: 'Stock',
                data: data.map(item => item.open),
                backgroundColor: [
                  'rgba(0, 0, 0, 0.6)',
                ]
              }
            ]
          }}
          options={{
            title: "Stocks"
          }} 
          />
      </div>
    );
  }
}
