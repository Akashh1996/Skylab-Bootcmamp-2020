import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

export async function loadHeroes() {
	let heroes;
	const response = await fetch(
		'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
	);
	debugger;
	const result = await response.json();
	heroes = result;

	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}
