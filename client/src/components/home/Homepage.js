import React, { Component } from "react";

import MostActive from "../mostActive/MostActive";
import MostGainers from "../mostGainers/MostGainers";
import MostLosers from "../mostLosers/MostLosers";
export default class Homepage extends Component {
  componentDidMount() {
    document.title = "Home | StockHQ";
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <MostActive />
            <MostGainers />
            <MostLosers />
          </div>
        </div>
      </div>
    );
  }
}
