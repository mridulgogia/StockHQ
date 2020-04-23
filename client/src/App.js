import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/index.scss"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            heyaa
            {/* <Routes /> */}
            {/* <Route path="/" exact component={} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
