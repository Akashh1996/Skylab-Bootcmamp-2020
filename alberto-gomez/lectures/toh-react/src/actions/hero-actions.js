import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

export async function loadHeroes() {
	debugger;
	const response = await fetch('heroes.json');
	const heroes = await response.json();
	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}

export async function loadHeroById(heroId) {
	const response = await fetch('heroes.json');
	const heroes = await response.json();
	const heroFound = heroes.find((hero) => hero.id === heroId);
	dispatcher.dispatch({
		type: actionTypes.LOAD_HERO,
		payload: heroFound
	});
}

export function deleteHero(heroId) {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO,
		payload: heroId
	});
}

export function addHero(name) {
	dispatcher.dispatch({
		type: actionTypes.ADD_HERO,
		payload: {
			id: Date.now(),
			name
		}
	});
}
