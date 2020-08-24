import React, { useEffect, useContext } from 'react';
import PokemonList from './PokemonList';
import PokemonContext from '../context/pokemon/pokemonContext';

const Home = () => {
  const pokemonContext = useContext(PokemonContext);

  const { pokemonUrls, getUrls } = pokemonContext;

  useEffect(() => {
    getUrls();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PokemonList pokemonUrls={pokemonUrls} />
    </div>
  );
};

export default Home;
