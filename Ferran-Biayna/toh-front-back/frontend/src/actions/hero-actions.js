import axios from 'axios';
import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

function requestGetHeroes() {
	return {
		type: actionTypes.LOAD_HEROES,
		payload: heroes.data
	};
}

export function getHeroes() {
  return async
}  {
	const heroes = await axios('http://localhost:4000/');

	dispatcherdispatch(
requestGetHeroes()
	);
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
			id: Date.now(), // unique value for the id
			name
		}
	});
}

export async function loadHeroById(heroId) {
	const { data } = await axios(`/api/heroes.json?heroId=${heroId}`);
	const hero = data.find((heroFind) => heroFind.id === heroId);
	dispatcher.dispatch({
		type: actionTypes.LOAD_HERO,
		payload: hero
	});
}
