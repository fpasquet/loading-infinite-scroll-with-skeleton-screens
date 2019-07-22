import React, { Fragment } from "react";

import HeroContent from '../../components/HeroContent';
import PokemonList from './pokemonList';

const PokedexPage = () => (
  <Fragment>
    <HeroContent />
    <PokemonList />
  </Fragment>
);

export default PokedexPage;
