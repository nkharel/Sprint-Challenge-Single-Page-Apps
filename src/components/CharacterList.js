import React, { useEffect, useState } from "react";
import axios from "axios"
import { Route, Link } from 'react-router-dom'
import CharacterCard from "./CharacterCard"
import styled from 'styled-components'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [filteredCharacter, updateCharacter] = useState([])

  const search = characters => {
    updateCharacter(characters)
  };
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      // console.log(response.data.results);
      setCharacters(response.data.results);
      updateCharacter(response.data.results);
    })
  }, []);

  

  return (
    <section className="character-list">
      
    </section>
  );
}
