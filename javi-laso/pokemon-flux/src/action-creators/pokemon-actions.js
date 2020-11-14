import actionTypes from './action-types';
import dispatcher from '../dispatcher';

async function loadPokemons(limit = 30, offset = 0) {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	);
	const pokemons = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_POKEMONS,
		payload: pokemons.results
	});
}

async function loadPokemon(pokemonName) {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
	);
	const pokemon = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_POKEMON,
		payload: pokemon
	});
}

export { loadPokemons, loadPokemon };
