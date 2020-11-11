import actionTypes from '../actions/actionTypes';

export default function pokeReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.LOAD_POKEMONS:
			debugger;
			return { ...state, pokemonList: action.pokemonList };
		case actionTypes.LOAD_POKEMONS_ERROR:
			debugger;
			const err = { ...state, error: action.error };
			return { ...state, error: action.error };
		case 'RANDOM':
			debugger;
			return { ...state, randomNum: action.randoNum };
		default:
			return state;
	}
}
