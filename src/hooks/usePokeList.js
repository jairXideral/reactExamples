import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonData } from '../redux/slices/pokedexReducer'
const usePokedex = () => {
    const pokemonListData = useSelector(({ pokedexReducer }) => pokedexReducer.pokemonList);
    const RenderAbilities = ({ arrayAbilities }) => {
        return arrayAbilities.map((ability) => (<p>{ability}</p>))
    }
    return { RenderAbilities, pokemonListData }
}
export default usePokedex;