import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { fromJS } from "immutable";

import PokemonList from "./index";

export let pokemons = fromJS([
  {
    id: 1,
    name: "bulbasaur",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
  },
  {
    id: 2,
    name: "ivysaur",
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
  },
  {
    id: 3,
    name: "venusaur",
    image: "https://img.pokemondb.net/artwork/venusaur.jpg"
  },
  {
    id: 4,
    name: "charmander",
    image: "https://img.pokemondb.net/artwork/charmander.jpg"
  },
  {
    id: 5,
    name: "charmeleon",
    image: "https://img.pokemondb.net/artwork/charmeleon.jpg"
  },
  {
    id: 6,
    name: "charizard",
    image: "https://img.pokemondb.net/artwork/charizard.jpg"
  },
  {
    id: 7,
    name: "squirtle",
    image: "https://img.pokemondb.net/artwork/squirtle.jpg"
  },
  {
    id: 8,
    name: "wartortle",
    image: "https://img.pokemondb.net/artwork/wartortle.jpg"
  },
  {
    id: 9,
    name: "blastoise",
    image: "https://img.pokemondb.net/artwork/blastoise.jpg"
  }
]);

storiesOf("Pokemon/List", module)
  .add("default", () => (
    <PokemonList
      loading={false}
      pokemons={pokemons}
      onLoadMore={action("onLoadMore")}
    />
  ))
  .add("loading", () => (
    <PokemonList loading={true} onLoadMore={action("onLoadMore")} />
  ));
