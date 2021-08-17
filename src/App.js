import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import Documents from "views/Documents/Documents.js"

function App() {
  return (
    <div>
      <Router forceRefresh={true} basename={process.env.PUBLIC_URL}> 
      {/* forceRefresh!! this solves the page loading the previous code issue */}
        <Switch>
          <Route exact path="/module1" >
            <Module1 />
          </Route>

          <Route exact path="/module2">
            <Module2 />
          </Route>

          <Route exact path="/module3"> 
            <Module3 />
          </Route>
          <Route exact path="/documents"> 
            <Documents />
          </Route>
          <Route exact path="/aboutus"> 
            <AboutUs />
          </Route>
          <Route exact path="/"> 
            <LandingPage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
export default App;
