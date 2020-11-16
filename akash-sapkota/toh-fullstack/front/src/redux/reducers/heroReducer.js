import actionTypes from '../actions/actionTypes';

export default function heroReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:

			return { ...state, pokemonList: action.pokemonList };
		case actionTypes.LOAD_HEROES_ERROR:
			// eslint-disable-next-line no-unused-vars
			const err = { ...state, error: action.error };
			return { ...state, error: action.error };
		case actionTypes.LOAD_HERO_DETAIL:

			const detail = { ...state, heroDetail: action.heroDetail }
			return detail
		case actionTypes.CLEAN_UP:
			debugger
			return { ...state, heroDetail: null }
		default:
			return state;

	}
}
