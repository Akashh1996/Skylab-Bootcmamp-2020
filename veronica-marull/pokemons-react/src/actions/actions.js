import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './actionTypes';

export async function loadPokemons() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon');
	const pokemonsResponse = await response.json();

	console.log(pokemonsResponse.results);

	dispatcher.dispatch({
		type: actionTypes.LOAD_POKEMONS,
		payload: pokemonsResponse.results
	});
}
