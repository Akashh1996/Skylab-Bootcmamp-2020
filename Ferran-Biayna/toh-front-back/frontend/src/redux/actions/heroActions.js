import axios from 'axios';
import actionTypes from './action-types'

function requestGetHeroes(heroes) {
	return {
		type: actionTypes.LOAD_HEROES,
		heroes: heroes.data
	};
}

function requestGetHeroesError(error) {
	return {
		type: actionTypes.LOAD_HEROES_ERROR,
		error
	};
}

export function getHeroes () {

	return async (dispatch) => {
		try {
			const heroes = await axios.get('http://localhost:5000/heroes')
			dispatch(requestGetHeroes(heroes))
		} catch (error) {
			dispatch(requestGetHeroesError(error))
		}
	}
}

function requestAddHero(newheroes) {
	return {
		type: actionTypes.ADD_HERO,
		heroes: newheroes.data
	};
}

function requestAddHeroError(error) {
	return {
		type: actionTypes.ADD_HERO_ERROR,
		error
	};
}

export function addHero(name_hero, heroes) {

	return async (dispatch) => {
		try {
			const newheroes = await axios.post('http://localhost:5000/heroes', {
				params: {id: heroes[heroes.length-1].id+1, name: name_hero}})
				dispatch(requestAddHero(newheroes))

		} catch (error) {
			dispatch(requestAddHeroError())
		}
	}
}

function requestChangeHero(newheroes) {
	return {
		type: actionTypes.CHANGE_HERO,
		heroes: newheroes.data
	};
}

function requestChangeHeroError(error) {
	return {
		type: actionTypes.CHANGE_HERO_ERROR,
		error
	};
}

export function changeHero(heroid, new_name) {

	return async (dispatch) => {
		try {
			const newheroes = await axios.put('http://localhost:5000/heroes', {
				params: {id: heroid, name: new_name}})
				dispatch(requestChangeHero(newheroes))

		} catch (error) {
			dispatch(requestChangeHeroError())
		}
	}
}

function requestDeleteHero(newheroes) {
	return {
		type: actionTypes.DELETE_HERO,
		heroes: newheroes.data
	};
}

function requestDeleteHeroError(error) {
	return {
		type: actionTypes.DELETE_HERO_ERROR,
		error
	};
}

export function deleteHero(hero_id) {

	return async (dispatch) => {
		try {
			const newheroes = await axios.delete('http://localhost:5000/heroes', {
				params: {id: hero_id}})
				dispatch(requestDeleteHero(newheroes))

		} catch (error) {
			dispatch(requestDeleteHeroError())
		}
	}
}
