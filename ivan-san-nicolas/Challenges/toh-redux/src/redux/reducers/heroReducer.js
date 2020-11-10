import actionTypes from '../actions/actionTypes';

export default function heroReducer(state = {}, action) {
	debugger;
	switch (action.type) {
		case actionTypes.ADD_HERO:
			return { ...state, heroes: [...state.heroes, action.hero] };
		case actionTypes.LOAD_HEROES:
			const heroes = action.heroes;
			return { ...state, heroes: [...state.heroes, ...heroes] };
		case actionTypes.DELETE_HERO:
			const newHeroes = state.heroes.filter((hero) => hero !== action.hero);
			return { ...state, heroes: newHeroes };
		default:
			return state;
	}
}
