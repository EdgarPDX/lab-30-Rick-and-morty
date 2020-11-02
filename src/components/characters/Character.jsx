import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, status, image, species, origin, location  }) => (

  <>
    <h2>{name}</h2>
    <img src={image} alt={name}/>
    <h3>Status: {status}</h3>
    <h3>Species: {species}</h3>
    <h3>Origin: {origin?.name}</h3>
    <h3>Location: {location?.name}</h3>
    
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Character;
