import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
// import Parallax from "components/Parallax/Parallax.js";
// import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/aboutUsPage.js";


// Sections for this page
// import Dude from "./Sections/dude.js"
// import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function AboutUs() {
  const classes = useStyles();
  return (
    <div>
      <Header
          brand="COVID-19 Modules"
          color="dark"
          // routes={dashboardRoutes}
          rightLinks={<HeaderLinks />}
       />
      <div className={classNames(classes.container)}>
        <TeamSection>
        </TeamSection>
        </div>
    </div>


  );
}
