import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { capitalize } from "lodash";

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent
} from "@material-ui/core";

import SkeltonItem from "../../Skelton/Item";

import useStyles from "./styles";

const PokemonItem = ({ loading = true, pokemon = {} }) => {
  const classes = useStyles();
  const { name, image } = pokemon;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        {loading ? (
          <SkeltonItem style={{ paddingTop: "56.25%" }} />
        ) : (
          <CardMedia
            className={classNames(classes.cardMedia, {
              "skeleton-item": loading
            })}
            image={image || null}
            title={capitalize(name)}
          />
        )}
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {loading ? <SkeltonItem /> : capitalize(name)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

PokemonItem.propTypes = {
  loading: PropTypes.bool,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  })
};

export default PokemonItem;
