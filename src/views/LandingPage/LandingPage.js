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


// import Button from "components/CustomButtons/Button.js";
// import Parallax from "components/Parallax/Parallax.js";
// import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";


// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
          brand="COVID-19 Modules"
          color="dark"
          // routes={dashboardRoutes}
          rightLinks={<HeaderLinks />}
       />
      <div className={classNames(classes.container)}>
          <GridContainer className = {classes.main}>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>COVID Learning Modules</h1>
              <h4 className = {classes.h4}>
                Welcome to COVID Learning Modules
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
    </div>


  );
}
