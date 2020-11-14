import actionTypes from './actionTypes';
import axios from 'axios';

function requestHeroesSuccess(pokemonList) {
	return {
		type: actionTypes.LOAD_HEROES,
		pokemonList
	};
}

function requestHeroesError(error) {
	return {
		type: actionTypes.LOAD_HEROES_ERROR,
		error
	};
}

export function requestHeroes() {
	return async (dispatch) => {
		const endpoint = 'http://localhost:1400/heroes';
		try {
			const pokemons = await axios.get(endpoint) /* {
				params: {
					limit: 151,
					offset: 0
				}
			}); */
			dispatch(requestHeroesSuccess(pokemons.data));
		} catch (error) {
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
	return {
		type: actionTypes.LOAD_HERO_DETAIL_ERROR,
		error
	};
}
export function cleanUp() {
	debugger;
	return {
		type: actionTypes.CLEAN_UP,
	};
}

export function requestHeroDetail(id) {
	return async (dispatch) => {
		const endpoint = `http://localhost:1400/heroes/${id}`;
		try {
			const hero = await axios.get(endpoint, {
				params: {
					heroId : id
				}
			})
			dispatch(requestHeroDetailSuccess(hero.data));
		} catch (error) {
			dispatch(requestheroDetailError(error));
		}
	};
}




