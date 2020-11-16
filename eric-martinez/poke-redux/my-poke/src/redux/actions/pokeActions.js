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
		const endpoint = 'http://localhost:1240/pokemons';
		try {
			const pokemons = await axios.get(endpoint, {
				params: {
					limit: 151,
					offset: 0
				}
			});
			debugger;
			//Dispatchamos una accion 'sincrona' de success
			dispatch(requestPokemonsSuccess(pokemons.data.results));
		} catch (error) {
			//Dispatchamos una accion 'sincrona' de error
			dispatch(requestPokemonsError(error));
		}
	};
}
