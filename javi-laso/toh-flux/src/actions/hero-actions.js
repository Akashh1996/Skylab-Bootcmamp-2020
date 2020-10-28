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

function deleteHero(heroId) {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO,
		payload: heroId
	});
}

function createHero(name) {
	if (!name.trim()) return;

	dispatcher.dispatch({
		type: actionTypes.ADD_HERO,
		payload: {
			id: Date.now(),
			name
		}
	});
}

function updateHero(updatedHero) {
	dispatcher.dispatch({
		type: actionTypes.UPDATE_HERO,
		payload: updatedHero
	});
}

export { loadHeroes, deleteHero, createHero, updateHero };
