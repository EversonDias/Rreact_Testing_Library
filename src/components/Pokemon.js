import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { pokemonType } from '../types';

import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon, showDetailsLink, isFavorite } = this.props;
    const { averageWeight, id, image, name, type } = pokemon;
    const { measurementUnit, value } = averageWeight;

    return (
      <div className="pokemon">
        <div className="pokemon-overview">
          <p data-testid="pokemon-name">{`${name}`}</p>
          <p data-testid="pokemon-type">{`${type}`}</p>
          <p data-testid="pokemon-weight">
            {`Average weight: ${value} ${measurementUnit}`}
          </p>
          {showDetailsLink && <Link to={ `/pokemon/${id}` }>More details</Link>}
        </div>
        <img src={ `${image}` } alt={ `${name} sprite` } />
        {isFavorite && (
          <img
            className="favorite-icon"
            src={ `/star-icon.svg` }
            alt={ `${name} is marked as favorite` }
          />
        )}
      </div>
    );
  }
}

Pokemon.propTypes = {
  isFavorite: PropTypes.bool,
  pokemon: pokemonType.isRequired,
  showDetailsLink: PropTypes.bool,
};

Pokemon.defaultProps = {
  showDetailsLink: true,
};

export default Pokemon;
