import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonData, setPokemonList } from '../redux/slices/pokedexReducer'
const usePokedex = () => {
    const dispatch = useDispatch();
    const [currentPokemonData, setCurrentPokemonData] = useState({})
    const [currentPokemonID, setCurrentPokemonID] = useState(1)
    const addNewPokemon = async (pokemon) => {
       dispatch(setPokemonList(pokemon))
    }
    const getPokemonDataByIDAndSetData = async () => {
        try {
            if (!currentPokemonID) {
                return
            }
            const pokemonData = await dispatch(getPokemonData(currentPokemonID))
            const { data } = pokemonData
            const { abilities, name, weight } = data
            const allAbilities = []
            abilities.forEach((abilityData) => {
                allAbilities.push(abilityData.ability.name)
            })
            setCurrentPokemonData({
                abilities: allAbilities, name, weight, pokemonImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonID}.png`
            })
        }
        catch(error) {
            console.log(error)
        }
    }
  return { setCurrentPokemonID, currentPokemonData, addNewPokemon, currentPokemonID, getPokemonDataByIDAndSetData }
}
export default usePokedex;