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

export function createRandomVariable() {
	const randomNumber = Math.random();
	return {
		type: 'RANDOM',
		randomNumber
	};
}

export function requestPokemons() {
	return async (dispatch) => {
		const endpoint = 'http://localhost:1240/pokemons';
		try {
			debugger;
			const pokemons = await axios.get(endpoint, {
				params: { limit: 151, offset: 0 }
			});
			debugger;
			dispatch(requestPokemonsSuccess(pokemons.data.results));
		} catch (error) {
			dispatch(requestPokemonError(error));
		}
	};
}
