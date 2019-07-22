import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

import { paths } from "../../routes";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Pokemon App
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            className={classes.link}
            component={RouterLink}
            to={paths.POKEDEX}
          >
            Pokedex
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            className={classes.link}
            component={RouterLink}
            to={paths.BATTLE}
          >
            Battle
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
