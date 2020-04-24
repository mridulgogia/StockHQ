import React, {Fragment} from "react";
import {Route, Switch } from "react-router-dom";

import Homepage from '../components/home/Homepage';

export default () => {
    return (
        <Fragment>
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    component={Homepage}
                />
            </Switch>
        </Fragment>
    )
}