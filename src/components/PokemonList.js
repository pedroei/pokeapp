import React, { useContext, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import Spinner from './layout/Spinner';
import PokemonContext from '../context/pokemon/pokemonContext';

const PokemonList = ({ pokemonUrls }) => {
  const pokemonContext = useContext(PokemonContext);

  const { loading, pokemons, getPokemons } = pokemonContext;

  useEffect(() => {
    getPokemons(pokemonUrls);
    // eslint-disable-next-line
  }, [pokemonUrls]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="cards2 mb-5">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.data.id} pokemon={pokemon.data} />
      ))}
    </div>
  );
};

export default PokemonList;
