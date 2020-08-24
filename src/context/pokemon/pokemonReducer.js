import {
  GET_POKEMONS_URL,
  GET_POKEMONS,
  GET_SINGLE_POKEMON,
  SET_LOADING,
  GET_EVOLUTIONS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMONS_URL:
      return {
        ...state,
        pokemonUrls: action.payload.data.results.map((result) => result.url),
        currentPokemon: null,
        currentEvolutions: null,
        loading: false,
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case GET_SINGLE_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload,
        loading: false,
      };
    case GET_EVOLUTIONS:
      return {
        ...state,
        currentEvolutions: action.payload.map(
          (result) => result.data.sprites.other.dream_world.front_default
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
