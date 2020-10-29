import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

async function loadHeroes() {
	const response = await fetch('api/heroes.json');
	const heroes = await response.json();
	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}

function deleteHero(id) {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO,
		payload: id
	});
}

export { loadHeroes, deleteHero };
