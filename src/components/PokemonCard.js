import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="card2">
        <img
          className="img-card"
          src={pokemon.sprites.other.dream_world.front_default}
          alt=""
          onMouseOver={(e) =>
            (e.currentTarget.src = pokemon.sprites.front_shiny)
          }
          onMouseOut={(e) =>
            (e.currentTarget.src =
              pokemon.sprites.other.dream_world.front_default)
          }
        />
      </div>
    </Link>
  );
};

export default PokemonCard;
