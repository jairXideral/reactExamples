import React from 'react'
import { Link } from 'react-router-dom'
const Pokedex = ({ name, abilities, weight, pokemonImage, addNewPokemon }) => {
  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight}</p>
      <img src={pokemonImage} alt="Pokemon IMG" />
      <button onClick={() => addNewPokemon({ name, abilities, weight, pokemonImage })}>Save pokemon</button>
      <Link to="/pokemonList"> Go to pokemon list</Link>
    </div>
  )
}

export default Pokedex