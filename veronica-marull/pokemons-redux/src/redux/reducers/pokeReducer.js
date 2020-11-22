import actionTypes from '../actions/actionTypes';

export default function pokeReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.LOAD_POKEMONS:
			//RETURN

			const coso = { ...state, pokemonList: action.pokemonList };

			return coso;

		case actionTypes.LOAD_POKEMONS_ERROR:
			const cosoError = { ...state, error: action.error };
			debugger;
			return cosoError;

		case 'RANDOM':
			const cosoRandom = { ...state, randomNumber: action.randomNumber };
			return cosoRandom;
		default:
			return state;
	}
}
