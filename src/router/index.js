import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './../views/home/home'

const RouteConfig = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/record" component={Home} />

            <Redirect to="/" />
        </Switch>
    </HashRouter>
);


export default RouteConfig;