import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://pokeapi.co/api/v2/",
  typePatcher: {
    PokemonsPayload: data => {
      if (data.results != null) {
        data.results = data.results.map(({ name, url }) => {
          const matchs = url.match(/^\S+\/(\d+)\/$/);
          const id = parseInt(matchs[1], 10);
          return {
            __typename: "Pokemon",
            id,
            name,
            image: `https://img.pokemondb.net/artwork/${name}.jpg`
          };
        });
      }
      return data;
    },
    PokemonSpeciesPayload: ({
      id,
      names,
      flavor_text_entries,
      evolution_chain
    }) => {
      const { name } = names.filter(({ language }) => language.name === "en");
      const { flavor_text: description } = flavor_text_entries.filter(
        ({ language }) => language.name === "en"
      );

      const matchs = evolution_chain.url.match(/^\S+\/(\d+)\/$/);
      const evolutionChainId = parseInt(matchs[1], 10);

      return {
        id,
        name,
        image: `https://img.pokemondb.net/artwork/${name}.jpg`,
        description,
        evolutionChainId
      };
    },
    PokemonEvolutionsPayload: ({ chain: { species, evolves_to } }) => {
      const evolutions = [];

      // recursif

      evolutions.push({
        name: species.name,
        image: `https://img.pokemondb.net/artwork/${species.name}.jpg`
      });

      evolutions.push({
        name: evolves_to.species.name,
        image: `https://img.pokemondb.net/artwork/${
          evolves_to.species.name
        }.jpg`
      });

      return evolutions;
    }
  }
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

export default client;
