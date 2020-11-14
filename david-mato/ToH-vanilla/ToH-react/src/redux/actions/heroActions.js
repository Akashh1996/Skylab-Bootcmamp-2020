import axios from 'axios';
const url = 'http://localhost:1250/heroes/'

export function loadHeroes() {
	return async (dispatch) => {
		const {data} = await axios.get(url);
		dispatch({type: 'LOAD_HEROES',
		heroes: data})
	}
}

export function addHero(heroName) {
	return async (dispatch) => {
		const {data} = await axios.post(url, {name: heroName});
		dispatch({type: 'ADD_HERO',
		heroes: data})
	}
}

export function deleteHero(heroId) {
	return async (dispatch) => {
		const {data} = await axios.delete(url, {params: {id: heroId}});
		dispatch({type: 'DELETE_HERO',
		heroes: data})
	}
}
