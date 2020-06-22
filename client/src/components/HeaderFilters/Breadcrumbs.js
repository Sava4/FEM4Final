import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

// import HomeIcon from '@material-ui/icons/Home';
// import WhatshotIcon from '@material-ui/icons/Whatshot';
// import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
    fontSize: "14 px",
    fontFamily: "Montserrat",
    textDecoration: "none",
    color: "black"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
}));

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <NavLink to="/" className={classes.link}>
        Home page
      </NavLink>
      <NavLink to="/categories" className={classes.link}>
        Categories
      </NavLink>
   
      <Typography color="textPrimary" className={classes.link}>

        Breadcrumb
      </Typography>
    </Breadcrumbs>
  );
}
