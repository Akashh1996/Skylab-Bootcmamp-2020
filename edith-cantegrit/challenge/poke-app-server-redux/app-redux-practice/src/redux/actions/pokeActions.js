import actionTypes from './actionTypes';
import axios from 'axios';

function requestPokemonsSuccess(pokemonList) {
	return {
		type: actionTypes.LOAD_POKEMONS,
		pokemonList
	};
}

function requestPokemonError(error) {
	return {
		type: actionTypes.LOAD_POKEMONS_ERROR,
		error
	};
}

export function createRandomvariable() {
	const randomNumber = Math.random();
	return {
		type: 'RANDOM',
		randomNumber
	};
}

export function requestPokemons() {
	return async (dispatch) => {
		const endpoint = 'https://localhost:1240';
		try {
			const pokemons = await axios(endpoint);
			dispatch(requestPokemonsSuccess(pokemons.data.results));
		} catch (error) {
			debugger;
			dispatch(requestPokemonError(error));
			//Dispatchamos una accion sincrona de error
		}
	};
}
