import actionTypes from './actionTypes';
import axios from 'axios';

export function addHero(hero) {
	return {
		type: actionTypes.ADD_HERO,
		hero
	};
}

export function deleteHero(hero) {
	return {
		type: actionTypes.DELETE_HERO,
		hero
	};
}

export async function loadHeroes() {
	debugger;
	const heroesResponse = await axios.get('/api/heroes.json');
	const heroes = heroesResponse.data;
	return {
		type: actionTypes.LOAD_HEROES,
		heroes
	};
}
