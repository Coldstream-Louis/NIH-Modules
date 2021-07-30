/*eslint-disable*/
import React from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/svgImgStyle.js";

const useStyles = makeStyles(styles);

export default function SvgImg(props) {
  const classes = useStyles();
  return (
    
    <div className={classes.parentC}>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.0062 4.2402">
        <polygon className={classes.grey} points="8.461 0.8 8.108 1.154 8.825 1.87 5.445 1.87 5.445 2.37 8.825 2.37 8.108 3.086 8.461 3.44 9.782 2.12 8.461 0.8" />
        <polygon className={classes.grey} points="19.443 0.8 19.089 1.154 19.806 1.87 16.427 1.87 16.427 2.37 19.806 2.37 19.089 3.087 19.443 3.44 20.763 2.12 19.443 0.8" />
        <circle className={classes.grey} cx="23.8861" cy="2.1201" r="2.1201" />
        <circle className={classes.green} cx="23.8861" cy="2.1201" r="1.6201"/>
        <path className={classes.grey} d="M23.3584,1.1167h.6982c.3692,0,.6807.1274.6807.5479a.4651.4651,0,0,1-.3906.4946l.459.7617h-.4766L23.9521,2.2h-.1962v.7212h-.3975Zm.3975.7466H23.99c.1455,0,.334-.0049.334-.2012,0-.1811-.1631-.209-.3086-.209h-.26Z" transform="translate(-0.113 -0.0637)"/>
        <circle className={classes.grey} cx="2.1201" cy="2.1201" r="2.1201" />
        <circle className={classes.blue} cx="2.1201" cy="2.1201" r="1.6201"/>
        <path className={classes.grey} d="M2.5786,1.5576a.384.384,0,0,0-.2876-.12c-.1123,0-.2676.0508-.2676.186,0,.3286.8306.1172.8306.749,0,.4029-.3237.5938-.6958.5938A.8561.8561,0,0,1,1.5518,2.74l.2827-.3105a.4424.4424,0,0,0,.3467.17c.13,0,.2753-.061.2753-.1885,0-.331-.8461-.1528-.8461-.7539a.6189.6189,0,0,1,.6879-.5864.8173.8173,0,0,1,.5533.1885Z" transform="translate(-0.113 -0.0637)"/>
        <circle className={classes.grey} cx="13.1039" cy="2.1201" r="2.1201"/>
        <circle className={classes.orange} cx="13.1039" cy="2.1201" r="1.6201" />
        <path className={classes.grey} d="M13.0186,1.1167h.3974V2.9209h-.3974Z" transform="translate(-0.113 -0.0637)"/>
      </svg>
    </div>


  );
}
