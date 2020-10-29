import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

export async function loadHeroes() {
	const response = await fetch('/api/superHeroData.json');
	const heroes = await response.json();

	dispatcher.dispatch({
		type: actionTypes.load_heroes,
		payload: heroes
	});
}

export async function loadHeroesById(heroId) {
	const response = await fetch('/api/superHeroData.json');
	const heroes = await response.json();
	let hero;

	for (let index = 0; index < heroes.length; index++) {
		if (heroes[index].id === heroId) {
			hero = heroes[index];
		}
	}

	dispatcher.dispatch({
		type: actionTypes.load_hero,
		payload: hero
	});
}
