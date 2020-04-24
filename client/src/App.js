import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./styles/_index.scss";

import Routes from './routes';
import { Header } from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
