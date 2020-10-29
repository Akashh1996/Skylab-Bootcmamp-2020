import actionTypes from './action-types';
import dispatcher from '../dispatcher';

async function loadPokemons(limit = 150, offset = 0) {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	);
	const pokemons = await response.json();
	debugger;
	dispatcher.dispatch({
		type: actionTypes.LOAD_POKEMONS,
		payload: pokemons
	});
}

export { loadPokemons };
