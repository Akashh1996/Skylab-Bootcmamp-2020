import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

export async function loadHeroes() {
	const response = await fetch('/api/heroes.json');
	const heroes = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes,
	});
}

export function deleteHero(heroId) {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO,
		payload: heroId,
	});
}

export function createHero(name) {
	if (!name.trim()) {
		return;
	}

	dispatcher.dispatch({
		type: actionTypes.ADD_HERO,
		payload: {
			id: Date.now(), //unique value for the id
			name,
		}
	});
}

export async function loadHeroById(heroId){
	const response = await fetch('/api/heroes.json');
	const heroes = await response.json();
	const hero = heroes.find((heroFind) => heroFind.id===heroId);
	dispatcher.dispatch({
		type: actionTypes.LOAD_HERO,
		payload: hero,
	});
}
