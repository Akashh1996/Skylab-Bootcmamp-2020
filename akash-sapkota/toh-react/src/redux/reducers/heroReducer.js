import { func } from 'prop-types';

export default function heroReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_HERO':
			return state.push(action.hero);
		case 'DELETE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);

		default:
			return state;
	}
}
