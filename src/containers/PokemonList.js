import React from 'react'
import usePokeList from '../hooks/usePokeList'
// import { connect } from 'react-redux'
const PokemonList = () => {
  const { RenderAbilities, pokemonListData } = usePokeList();
  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemonListData.map((pokemonData) => {
        const { abilities, name, weight, pokemonImage } = pokemonData
        return <div>
          <p>{name}</p>
          <p>{weight} KG</p>
          <img src={pokemonImage} alt="Pokemon IMG" />
          <p>Abilities</p>
          <RenderAbilities arrayAbilities={abilities} />
        </div>
      })}
    </div>
  )
}

export default PokemonList