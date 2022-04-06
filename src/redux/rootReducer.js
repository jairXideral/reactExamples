import { combineReducers } from '@reduxjs/toolkit';
import pokedexReducer from './slices/pokedexReducer';
const createReducer = asyncReducers =>
	combineReducers({
		pokedexReducer,
		...asyncReducers
	});

export default createReducer;