import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MapPage from 'views/MapPage/MapPage';
import MarkerPopUp from "./views/MapPage/MarkerPopUp";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/map-page" component={MapPage} />
      <Route path="/dashboard-page" component={MarkerPopUp} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/landing-page" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
