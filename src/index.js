import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import Components from "views/Components/Components.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Module1 from "views/Module1/Module1.js";
import Module2 from "views/Module2/Module2.js"
import Module3 from "views/Module3/Module3.js"
import AboutUs from "views/AboutUs/AboutUs.js"
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/module1" component={Module1} />
      <Route exact path="/module2" component={Module2} />
      <Route exact path="/module3" component={Module3} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
