import actionTypes from './action-types';
import dispatcher from '../dispatcher';

const hero = {
	id: 12,
	name: 'Narco',
	lastname: 'Traficante'
};

export function loadHero() {
	dispatcher.dispatch({
		type: 'LOAD_HERO',
		data: hero
	});
}

export async function loadHeroes() {
	const response = await fetch('api/heroes.json');
	const heroes = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}

export function deleteHero(heroId) {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO,
		payload: heroId
	});
}

export function createHero(name) {
	if (!name.trim()) {
		return;
	}

	dispatcher.dispatch({
		type: actionTypes.ADD_HERO,
		payload: {
			id: Date.now(),
			name
		}
	});
}
