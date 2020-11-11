import axios from 'axios';

export function addHero(hero) {
	return {
		type: 'ADD_HERO',
		hero
	};
}

export function deleteHero(hero) {
	return {
		type: 'DELETE_HERO',
		hero
	};
}

export const getHeroes = () => async (dispatch) => {
	const response = await axios.get('api/heroes.json');
	dispatch({
		type: 'GET_HEROES',
		heroes: response.data
	});
};
