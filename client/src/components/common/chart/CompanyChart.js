import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class CompanyChart extends Component {
  render() {
    return (
      <div>
        Chart
        <Line data={this.props.data} />
      </div>
    );
  }
}
