import React from "react";
import { storiesOf } from "@storybook/react";

import PokemonItem from "./index";

export const pokemon = {
  name: "bulbasaur",
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
};

storiesOf("Pokemon/Item", module)
  .add("default", () => <PokemonItem loading={false} pokemon={pokemon} />)
  .add("loading", () => <PokemonItem loading={true} />);
