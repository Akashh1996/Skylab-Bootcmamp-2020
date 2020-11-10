import actionTypes from '../actions/actionTypes';

export default function heroReducer(state = {}, action) {
	debugger;
	switch (action.type) {
		case actionTypes.ADD_HERO:
			return { ...state, heroes: [state.heroes, action.hero] };
		case actionTypes.LOAD_HEROES:
			return { ...state, heroes: [state.heroes, action.payload] };
		case actionTypes.DELETE_HERO:
			const heroes = state.heroes.filter((hero) => hero !== action.hero);
			return { ...state, heroes: heroes };
		default:
			return state;
	}
}
