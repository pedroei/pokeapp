import React, { useEffect, useContext } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import PokemonContext from '../context/pokemon/pokemonContext';

const Home = () => {
  const pokemonContext = useContext(PokemonContext);

  const {
    pokemonUrls,
    getUrls,
    prevPage,
    nextPage,
    changePage,
    loading,
  } = pokemonContext;

  useEffect(() => {
    getUrls();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Pagination
        loading={loading}
        prevPage={prevPage !== null && prevPage}
        nextPage={nextPage !== null && nextPage}
        changePage={changePage}
      />
      <PokemonList pokemonUrls={pokemonUrls} />
      <Pagination
        loading={loading}
        prevPage={prevPage !== null && prevPage}
        nextPage={nextPage !== null && nextPage}
        changePage={changePage}
      />
    </div>
  );
};

export default Home;
