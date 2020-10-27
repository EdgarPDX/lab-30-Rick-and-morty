import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from './Character';

const AllCharacters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={`${character.id}`}>
      <Link to={`/detail/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
} ;

AllCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired
  })).isRequired
};

export default AllCharacters;
