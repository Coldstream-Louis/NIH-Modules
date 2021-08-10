import React from "react";
import LandingPage from "views/LandingPage/LandingPage.js";
import Module1 from "views/Module1/Module1.js";
import Module2 from "views/Module2/Module2.js"
import Module3 from "views/Module3/Module3.js"
import AboutUs from "views/AboutUs/AboutUs.js"

const routes = {
  "/module1" : () => <Module1 />,
  "/module2" : () => <Module2 />,
  "/module3" : () => <Module3 />,
  "/about" : () => <AboutUs />,
  "/" : () => <LandingPage />
};


export default routes;