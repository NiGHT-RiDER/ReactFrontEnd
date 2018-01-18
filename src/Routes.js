import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from './components/splash/Splash';
import error404 from './components/404/error404';

export default () => 
  <Switch>
    <Route path="/" exact component={Splash} />
    { /* On fait ca pour au final catch le 404*/}
    <Route component={error404} />
  </Switch>;

