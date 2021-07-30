/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <CustomDropdown
          buttonText="Modules"
          // dropdownHeader="Lessons"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/Module1" className={classes.dropdownLink}>
            Module 1: What is SIR??
          </Link>,
          <Link to="/Module2" className={classes.dropdownLink}>
            Module 2: Walking Through the SIR Model
          </Link>,
          <Link to="/Module3" className={classes.dropdownLink}>
          Module 3: Video
        </Link>,          
          ]}
      />

      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
            About Us
        </Link>
      </ListItem>
    </List>
  );
}
