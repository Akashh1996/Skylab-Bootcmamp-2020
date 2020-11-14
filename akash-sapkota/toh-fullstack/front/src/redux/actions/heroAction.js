import actionTypes from './actionTypes';
import axios from 'axios';

function requestHeroesSuccess(pokemonList) {
	return {
		type: actionTypes.LOAD_HEROES,
		pokemonList
	};
}

function requestHeroesError(error) {
	debugger;
	return {
		type: actionTypes.LOAD_HEROES_ERROR,
		error
	};
}

export function requestHeroes() {
	return async (dispatch) => {
		const endpoint = 'http://localhost:1400/heroes';
		try {
			debugger
			const pokemons = await axios.get(endpoint) /* {
				params: {
					limit: 151,
					offset: 0
				}
			}); */
			debugger
			dispatch(requestHeroesSuccess(pokemons.data));
		} catch (error) {
			debugger
			dispatch(requestHeroesError(error));
		}
	};
}

function requestHeroDetailSuccess(heroDetail){
	return{
		type: actionTypes.LOAD_HERO_DETAIL,
		heroDetail
	}
}
function requestheroDetailError(error) {
	debugger;
	return {
		type: actionTypes.LOAD_HERO_DETAIL_ERROR,
		error
	};
}

export function requestHeroDetail(id) {
	return async (dispatch) => {
		const endpoint = `http://localhost:1400/heroes/${id}`;
		try {
			debugger
			const hero = await axios.get(endpoint, {
				params: {
					heroId : id
				}
			})
			dispatch(requestHeroDetailSuccess(hero.data));
		} catch (error) {
			debugger
			dispatch(requestheroDetailError(error));
		}
	};
}


