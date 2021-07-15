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
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    
    <List className={classes.list}>
    
      <ListItem className={classes.listItem}>
        <a
         
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <PhoneIcon className={classes.icons} /> +57 3209048264 
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <MailIcon className={classes.icons} /> crab-recycling@outlook.com 
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <LocationOnIcon className={classes.icons} /> Ubicación
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
           
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            {console.log(classes.socialIcons)}
            <TwitterIcon></TwitterIcon>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://l.facebook.com/CrabRecycling"
            target="_blank"
            className={classes.navLink}
          >
            <FacebookIcon/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <InstagramIcon/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
