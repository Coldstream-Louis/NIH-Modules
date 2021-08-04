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
import styles from "assets/jss/material-kit-react/views/landingPage.js";


// Sections for this page
import Dude from "./Sections/dude.js"
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function LandingPage() {
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
          <GridContainer className = {classes.main}>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>COVID Learning Modules</h1>
              <h2 className = {classes.subtitle}>
                Welcome to COVID Learning Modules!
              </h2>
              <br />
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <Dude></Dude>
            </GridItem>
            <GridItem xs={8} sm={8} md={8} className={classes.withButton}>
            <Card className="card">
              <CardHeader className="stepHeader">
              <h4 className={classes.h4}>Learn about different data models using this easy-to-follow visual journey.</h4>
              </CardHeader>
              <CardBody className={classes.theButton}>
              <Button component={Link} to ="/Module1" size="lg" round>
                Go to Module 1 &#8594;
              </Button>
              </CardBody>
            </Card>  


            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <p className={classes.p}>Built by ZEEE Lab.</p>
            </GridItem>
          </GridContainer>
        </div>
    </div>


  );
}
