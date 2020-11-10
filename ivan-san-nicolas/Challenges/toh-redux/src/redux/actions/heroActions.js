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

export const loadHeroes = () => async (dispatch) => {
	const heroesResponse = await axios.get('/api/heroes.json');
	const heroes = heroesResponse.data;
	debugger;
	dispatch({
		type: actionTypes.LOAD_HEROES,
		heroes
	});
};
