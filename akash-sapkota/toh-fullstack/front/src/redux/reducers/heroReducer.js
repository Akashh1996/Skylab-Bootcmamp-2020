import actionTypes from '../actions/actionTypes';

export default function heroReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			debugger;
			return { ...state, pokemonList: action.pokemonList };
		case actionTypes.LOAD_HEROES_ERROR:
			debugger;
			// eslint-disable-next-line no-unused-vars
			const err = { ...state, error: action.error };
			return { ...state, error: action.error };
		case actionTypes.LOAD_HERO_DETAIL:
			debugger
		const detail = {...state, heroDetail: action.heroDetail }
		return detail
		default:
			return state;
	}
}
