import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Character from '../components/characters/Character';
import { getCharacter } from '../services/ricknmorty-api';

const DetailPage = () => {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getCharacter(id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <Character {...character} />
  );
};

export default DetailPage;


