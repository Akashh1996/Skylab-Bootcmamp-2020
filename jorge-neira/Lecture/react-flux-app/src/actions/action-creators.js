import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

export async function loadHeroes() {
	let heroes;
	const response = await fetch('api/superHeroData.json');
	debugger;
	const result = await response.json();
	heroes = result;

	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}
