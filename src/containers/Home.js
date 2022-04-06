import React, { useEffect, useState } from 'react'
import Pokedex from '../components/Pokedex'
// import axios from 'axios'
// import '../assets/styles/containers/Home.css'
import usePokedex from '../hooks/usePokedex'
const Home = () => {
    const {setCurrentPokemonID, currentPokemonData, addNewPokemon, currentPokemonID, getPokemonDataByIDAndSetData} = usePokedex()
    useEffect(() => {
        getPokemonDataByIDAndSetData()
    }, [currentPokemonID])
    return (
        <div className="homeContainer">
            <label >Enter an ID for your pokemon</label>
            <input type="number" onChange={(e) => setCurrentPokemonID(e.target.value)} />
            <Pokedex 
                name={currentPokemonData.name} 
                abilities={currentPokemonData.abilities} 
                weight={currentPokemonData.weight} 
                pokemonImage={currentPokemonData.pokemonImage}
                addNewPokemon={addNewPokemon}
            />
        </div>
    )
}

export default Home