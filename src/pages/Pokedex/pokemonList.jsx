import React from "react";
import { fromJS } from "immutable";

import { Query } from "react-apollo";

import PokemonListBase from "../../components/Pokemon/List";
import { POKEMONS } from "../../graphql/queries";

const PokemonList = ({ limit = 9 }) => {
  return (
    <Query query={POKEMONS} variables={{ offset: 0, limit }}>
      {({ error, data: { pokemons = [] }, fetchMore }) => {
        if (error) return <p>Error :(</p>;

        const loadMore = () =>
          fetchMore({
            variables: {
              offset: pokemons.results.length
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult.pokemons.results) return prev;

              return {
                pokemons: {
                  __typename: "PokemonPayload",
                  results: [
                    ...prev.pokemons.results,
                    ...fetchMoreResult.pokemons.results
                  ]
                }
              };
            }
          });

        return (
          <PokemonListBase
            pokemons={fromJS(pokemons.results || [])}
            limit={limit}
            onLoadMore={loadMore}
          />
        );
      }}
    </Query>
  );
};

export default PokemonList;
