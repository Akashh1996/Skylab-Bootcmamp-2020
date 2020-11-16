import axios from 'axios';

export function addHero(hero) {
	return {
		type: 'ADD_HERO',
		hero
	};
}

export const loadHeroes = () => async (dispatch) => {
	debugger;
	const heroes = await axios.get('api/heroes.json');
	dispatch({
		type: 'LOAD_HEROES',
		payload: heroes.data
	});
};
