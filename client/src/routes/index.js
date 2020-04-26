import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "../components/home/Homepage";
import StockPage from "../components/stock/StockPage";

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Route exact path="/company/:id" component={StockPage} />
    </Fragment>
  );
};
