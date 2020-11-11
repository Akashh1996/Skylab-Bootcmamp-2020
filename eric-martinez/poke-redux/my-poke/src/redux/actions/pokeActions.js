import actionTypes from './actionTypes';
import axios from 'axios';

function requestPokemonsSuccess(pokemonList) {
	return {
		type: actionTypes.LOAD_POKEMONS,
		pokemonList
	};
}

function requestPokemonsError(error) {
	return {
		type: actionTypes.LOAD_POKEMONS_ERROR,
		error
	};
}

export function requestPokemons() {
	return async (dispatch) => {
		const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
		try {
			const pokemons = await axios(endpoint);
			//Dispatchamos una accion 'sincrona' de success
			dispatch(requestPokemonsSuccess(pokemons.data.results));
		} catch (error) {
			//Dispatchamos una accion 'sincrona' de error
			dispatch(requestPokemonsError(error));
		}
	};
}
