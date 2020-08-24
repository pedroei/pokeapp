import React, { Fragment, useContext, useEffect } from 'react';
import PokemonContext from '../context/pokemon/pokemonContext';
import Spinner from './layout/Spinner';
import { changeColor } from '../helpers/typeColors';

const Pokemon = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);
  const {
    getSinglePokemon,
    currentPokemon,
    loading,
    getEvolutions,
    currentEvolutions,
  } = pokemonContext;

  const { id } = match.params;

  useEffect(() => {
    getSinglePokemon(id);
    getEvolutions(id);
    // eslint-disable-next-line
  }, []);

  if (loading || currentPokemon === null || currentEvolutions === null) {
    return <Spinner />;
  }

  return (
    !loading &&
    currentPokemon !== null &&
    currentEvolutions !== null && (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <h1
            className="display-3"
            style={{
              marginBottom: '20px',
              backgroundColor: 'rgb(238,238,238,0.3)',
              borderRadius: '15px',
              display: 'inline-block',
              padding: '10px 100px',
            }}
          >
            {currentPokemon.name.charAt(0).toUpperCase() +
              currentPokemon.name.slice(1)}
          </h1>

          <div className="my-3">
            {currentPokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="badge mr-2"
                style={{
                  fontSize: '25px',
                  backgroundColor: changeColor(type.type.name),
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>

          <div
            className="centerImgs"
            style={{
              padding: '50px',

              borderRadius: '20px',
              marginBottom: '20px',
            }}
          >
            {currentEvolutions.length < 4 ? (
              currentEvolutions.map((pokemon) => (
                <img
                  key={pokemon}
                  src={pokemon}
                  alt="pokemon"
                  style={{ width: '250px' }}
                />
              ))
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '20px',
                }}
              >
                {currentEvolutions.map((pokemon) => (
                  <img
                    key={pokemon}
                    src={pokemon}
                    alt="pokemon"
                    style={{ width: '250px' }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          className="container mb-5"
          style={{
            backgroundColor: 'rgb(255,255,255, 0.8',
            color: '#000',
            borderRadius: '20px',
            padding: '25px',
          }}
        >
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Hp</th>
                <th scope="col">Attack</th>
                <th scope="col">Defence</th>
                <th scope="col">Special-attack</th>
                <th scope="col">Special-defence</th>
                <th scope="col">Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {currentPokemon.stats.map((stat) => (
                  <td key={stat.stat.name}>{stat.base_stat}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container text-center">
          <hr className="my-3" />
          <p className="lead" style={{ color: '#fff', fontWeight: 'bold' }}>
            This Pokemon normally weighs {currentPokemon.weight}kg and has a
            height of about {currentPokemon.height} inches
          </p>
          <hr className="my-3" />
        </div>
      </Fragment>
    )
  );
};

export default Pokemon;
