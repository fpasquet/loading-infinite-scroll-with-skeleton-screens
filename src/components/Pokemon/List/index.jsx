import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { List, fromJS } from "immutable";

import { Container, Grid } from "@material-ui/core";

import { useInfiniteScroll } from "../../../hooks";

import PokemonItem from "../Item";

import useStyles from "./styles";

const PokemonList = ({
  pokemons = new List(),
  limit = 9,
  onLoadMore = () => {}
}) => {
  const classes = useStyles();
  const [items, setItems] = useState(pokemons);

  const fetchMore = () => {
    onLoadMore().then(() => {
      setIsFetching(false);
    });
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);

  useEffect(() => {
    if (pokemons.size === 0) {
      setItems(List([...Array(limit)].map(() => ({ loading: true }))));
    } else {
      setItems(
        pokemons.map(pokemon => pokemon.mergeDeep(pokemon, { loading: false }))
      );
    }
  }, [pokemons]);

  useEffect(() => {
    if (isFetching) {
      setItems(
        List(
          pokemons
            .map(pokemon => pokemon.mergeDeep(pokemon, { loading: false }))
            .merge(List([...Array(limit)].fill({ loading: true })))
        )
      );
    }
  }, [isFetching]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {items.toJS().map(({ loading, ...pokemon }, key) => (
          <PokemonItem key={key} loading={loading} pokemon={pokemon} />
        ))}
      </Grid>
    </Container>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.instanceOf(List),
  limit: PropTypes.number,
  onLoadMore: PropTypes.func
};

export default PokemonList;
