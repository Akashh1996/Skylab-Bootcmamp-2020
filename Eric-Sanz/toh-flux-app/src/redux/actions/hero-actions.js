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

export const loadHeroes = () => async (dispatch) => {
	const response = await axios.get('./heroes.json');
	dispatch({
		type: 'LOAD_HEROES',
		heroes: response.data
	});
};
