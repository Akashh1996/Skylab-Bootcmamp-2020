import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

export async function loadHeroes() {
	const response = await fetch('api/heroes.json');
	const heroes = await response.json();

	dispatcher.dispatch({
		type: actionTypes.load_hero,
		payload: heroes
	});
}
