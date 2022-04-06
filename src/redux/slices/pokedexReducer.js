import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const setPokemonList = (pokemon) => async (dispatch, getState) => {
	dispatch(setPokeList(pokemon));
}
export const getPokemonData = (pokemonId) => async (dispatch, getState) => {
    try {
		const response = await axios.get(`api/v2/pokemon/${pokemonId}`)
		dispatch(setPokemonData(response.data));
		return response
	}
	catch (error) {
		dispatch(setPokemonData(false))
		return error
	}
}

const pokedexAdapter = createEntityAdapter({});
export const { selectAll: selectPokedex, selectById: selectPokedexById } = pokedexAdapter.getSelectors(
	state => state.App.pokedex
);

const pokedexSlice = createSlice({
	name: 'App/pokedex',
	initialState:pokedexAdapter.getInitialState({
        pokeData: {},
		pokemonList: []
	}),
	reducers: {
		setPokemonData: (state, action) => {
			state.pokeData = action.payload;
		},
		setPokeList: (state, action) => {
			state.pokemonList.push(action.payload);
		},
	},
	extraReducers: {

    }
});

export const { setPokemonData, setPokeList } = pokedexSlice.actions;

export default pokedexSlice.reducer;