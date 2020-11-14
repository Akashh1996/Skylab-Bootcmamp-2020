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
export function loadHero() {
	return async (dispatch) => {
		debugger;
		const { data } = await axios.get('http://localhost:1240/');
		dispatch({ type: 'LOAD_HERO', data });
	}
	
}
