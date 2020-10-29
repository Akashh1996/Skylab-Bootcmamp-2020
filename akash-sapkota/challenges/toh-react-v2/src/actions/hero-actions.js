import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

export async function loadHeroes() {
	debugger;
	const respose = await fetch('api/heroes.json');
	const heroes = await respose.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}
