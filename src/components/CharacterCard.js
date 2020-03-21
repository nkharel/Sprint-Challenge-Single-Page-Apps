import React, { useEffect, useState } from "react";
import axios from "axios"

export default function CharacterCard(props) {
  const [showCharacter, setShowCharacter] = useState([])

   useEffect(() => {
     const id = props.match.params.id;
       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setShowCharacter([response.data])
        })
        .catch(error => {
          console.error(error);
        });

  },[props]);
  return (
    <div>
      {/* {showCharacter.map(character => {
        return <div key={character.id}>
          <h1>{character.name}</h1>
          <p>
            <img src={character.image} alt={character.name} /><br />
            <b>Status:</b> {character.status} <br />
            <b>Species:</b> {character.species} <br />
          </p>
        </div>
      })}       */}
    </div>
  )
    }
