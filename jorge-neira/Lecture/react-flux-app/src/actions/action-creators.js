import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

export async function loadHeroes() {
	const response = await fetch('api/heroData.json');
	const heroes = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}
