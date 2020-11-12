import actionTypes from './action-types';
import axios from 'axios';
const endpoint = 'http://localhost:4000/';

export function addHero(hero) {
	return async (dispatch) => {
		try {
			const heroAddedList = await axios.post(endpoint, {
				name: hero.name
			});

			dispatch(addHeroSuccess(heroAddedList.data));
		} catch (error) {}
	};
}

function addHeroSuccess(heroList) {
	return {
		type: actionTypes.ADD_HERO,
		heroList
	};
}

export function deleteHero(hero) {
	return async (dispatch) => {
		try {
			const heroDeletedList = await axios.delete(endpoint, {
				params: { id: hero.id }
			});

			dispatch(deleteHeroSuccess(heroDeletedList.data));
		} catch (error) {}
	};
}

function deleteHeroSuccess(heroList) {
	return {
		type: actionTypes.DELETE_HERO,
		heroList
	};
}

export function chargeHeroesList() {
	return async (dispatch) => {
		try {
			const heroes = await axios(endpoint);
			dispatch(requestHeroesListSuccess(heroes.data));
		} catch (error) {
			dispatch(requestHeroesListFailure(error));
		}
	};
}

function requestHeroesListSuccess(heroesList) {
	return {
		type: actionTypes.CHARGE_HEROES,
		heroesList
	};
}

function requestHeroesListFailure(error) {
	return {
		type: actionTypes.CHARGE_HEROES_ERROR,
		error
	};
}
