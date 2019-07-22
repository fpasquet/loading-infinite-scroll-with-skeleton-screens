import gql from "graphql-tag";

export const POKEMONS = gql`
  query POKEMONS($offset: Int = 0, $limit: Int = 15) {
    pokemons(offset: $offset, limit: $limit)
      @rest(
        type: "PokemonsPayload"
        path: "pokemon/?offset={args.offset}&limit={args.limit}"
      ) {
      count
      results @type(name: "Pokemon") {
        id
        name
        image
      }
    }
  }
`;

export const POKEMON = gql`
  query POKEMON($id: Int) {
    pokemon(id: $id)
      @rest(type: "PokemonSpeciesPayload", path: "pokemon-species/{args.id}") {
      id @export(as: "id")
      name
      image
      description
      evolutionChainId @export(as: "evolutionChainId")
      evolutions
        @rest(
          type: "PokemonEvolutionsPayload"
          path: "evolution-chain/{exportVariables.evolutionChainId}"
        ) {
        name
        image
      }
    }
  }
`;
