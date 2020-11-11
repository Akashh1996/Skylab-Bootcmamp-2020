import actionTypes from '../actions/actionTypes'

export default function pokeReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_POKEMONS:
            return { ...state, pokemonList: action.pokemonList };
        case actionTypes.LOAD_POKEMONS_ERROR:
            break;
        default:
            return state;
    }
}