import { func } from 'prop-types';

export default function heroReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_HERO':
			return [...state, action.hero]; //state.push(action.hero); cannot mutate the state so chage it to a mere copy
		case 'DELETE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);

		default:
			return state;
	}
}
