import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import store from "./store";

import "./styles/_index.scss";

import Routes from "./routes";
import { Header } from "./components/header/Header";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authAction"

class App extends React.Component {
  componentDidMount() {
    if( localStorage.getItem("jwtToken")) {
      setAuthToken(localStorage.getItem("jwtToken"));
      const decoded = jwt_decode(localStorage.jwtToken);

      store.dispatch(setCurrentUser(decoded));
    }
  }
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
