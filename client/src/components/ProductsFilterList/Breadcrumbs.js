import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles(theme => ({
  main: {
    borderBottom: "1px solid  #002D50",
    height: "63px",
    paddingLeft: "130px",
    display: "flex"
  },
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

const IconBreadcrumbs = props => {
  const classes = useStyles();
  const { categoryName } = props;

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.main}>
      <NavLink to="/" className={classes.link}>
        Home page
      </NavLink>
      <NavLink to="/categories" className={classes.link}>
        {categoryName ? "Categories" : "Collections"}
      </NavLink>
      <Typography
        color="textPrimary"
        className={classes.link}
        style={{ textTransform: "capitalize" }}
      >
        {categoryName}
      </Typography>
    </Breadcrumbs>
  );
};

export default IconBreadcrumbs;
