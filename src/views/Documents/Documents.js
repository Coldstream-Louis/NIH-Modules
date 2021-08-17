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
import styles from "assets/jss/material-kit-react/views/docPage.js";

import * as m12Img from "assets/img/docsImgs/m12_preview.png"

const useStyles = makeStyles(styles);

export default function Documents() {
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
              <h1 className={classes.title}>Storyboards</h1>
              <h2 className = {classes.subtitle}>A peek into the design process!</h2>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} className={classes.pdfComp}>
              <h3 className={classes.h3}>Module 1 and 2 Storyboard</h3>
              <img src={m12Img} className={classes.pdfImg}></img>
              <Button component={Link} to ="module1_2_storyboard.pdf" size="lg" round>
                  Download Storyboard
              </Button>
            </GridItem>
          </GridContainer>
      </div>
    </div>


  );
}
