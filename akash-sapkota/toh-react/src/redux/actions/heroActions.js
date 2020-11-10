import Axios from 'axios';
import { func } from 'prop-types';

export function addHero(hero) {
	return {
		type: 'ADD_HERO',
		hero: hero
	};
}
export function deleteHero(hero) {
	return {
		type: 'DELETE_HERO',
		hero
	};
}
export async function loadHero(dispatch, getState) {
	const { data } = await Axios(`api/heroes.json`);
	dispatch({
		type: 'LOAD_HEROES',
		data
	});
}
