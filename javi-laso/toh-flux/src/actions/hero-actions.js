import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

async function loadHeroes() {
	debugger;
	const response = await fetch('api/heroes.json');
	const heroes = await response.json();
	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}

export { loadHeroes };
