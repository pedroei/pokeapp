import React, { useReducer } from 'react';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import pokemonReducer from './pokemonReducer';
import {
  GET_POKEMONS_URL,
  GET_POKEMONS,
  GET_SINGLE_POKEMON,
  SET_LOADING,
  GET_EVOLUTIONS,
} from '../types';

const PokemonState = (props) => {
  const initialState = {
    pokemonUrls: [],
    pokemons: [],
    currentPokemon: null,
    currentEvolutions: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Get pokemon urls
  const getUrls = async () => {
    setLoading();
    try {
      const result = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );

      dispatch({ type: GET_POKEMONS_URL, payload: result });
    } catch (err) {
      console.error(err);
    }
  };

  // Get pokemons
  const getPokemons = (pokemonUrls) => {
    setLoading();
    axios
      .all(pokemonUrls.map((l) => axios.get(l)))
      .then(
        axios.spread(function (...res) {
          dispatch({ type: GET_POKEMONS, payload: res });
        })
      )
      .catch((err) => console.log(err));
  };

  // Get single pokemon by id
  const getSinglePokemon = async (id) => {
    try {
      setLoading();
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      dispatch({ type: GET_SINGLE_POKEMON, payload: result.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Get evolutions of single pokemon
  const getEvolutions = async (id) => {
    try {
      const result = await axios.get(
        `http://pokeapi.co/api/v2/pokemon-species/${id}`
      );

      getChain(result.data.evolution_chain.url);
    } catch (err) {
      console.error(err);
    }
  };

  const getChain = async (link) => {
    try {
      //setLoading();
      const result = await axios.get(link);
      const allevolutions = [];

      //console.log(result.data.chain);
      //console.log(result.data.chain.species.name);
      allevolutions.push(result.data.chain.species.name);
      if (result.data.chain.evolves_to.length !== 0) {
        result.data.chain.evolves_to.forEach((lvl) => {
          //console.log(lvl.species.name);
          allevolutions.push(lvl.species.name);
          if (lvl.evolves_to.length) {
            lvl.evolves_to.forEach((l) => {
              //console.log(l.species.name);
              allevolutions.push(l.species.name);
            });
          }
        });
        //console.log(allevolutions);

        getEvolutionsIds(allevolutions);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getEvolutionsIds = (chain) => {
    setLoading();
    axios
      .all(
        chain.map((name) =>
          axios.get(`http://pokeapi.co/api/v2/pokemon/${name}`)
        )
      )
      .then(
        axios.spread(function (...res) {
          console.log(res);
          dispatch({ type: GET_EVOLUTIONS, payload: res });
        })
      )
      .catch((err) => console.log(err));
  };

  // Set loading to true
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonUrls: state.pokemonUrls,
        pokemons: state.pokemons,
        loading: state.loading,
        currentPokemon: state.currentPokemon,
        currentEvolutions: state.currentEvolutions,
        getUrls,
        getPokemons,
        getSinglePokemon,
        getEvolutions,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
