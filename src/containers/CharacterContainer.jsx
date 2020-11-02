import React, { useState, useEffect } from 'react';
import AllCharacters from '../components/characters/AllCharacters';
import { getCharacters } from '../services/ricknmorty-api';

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <AllCharacters characters={characters} />
  );
};

export default CharacterContainer;


