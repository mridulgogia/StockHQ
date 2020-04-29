import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Homepage from "../components/home/Homepage";
import StockPage from "../components/stock/StockPage";
import Profile from "../components/profile/Profile";

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Route exact path="/company/:id" component={StockPage} />
      <Switch>
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </Fragment>
  );
};
