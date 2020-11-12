import actionTypes from '../actions/actionTypes'

export default pokeReducer(state = {}, action) {
    switch(action.type) {
        case actionTypes.LOAD_POKEMONS:
            //return whatever
            debugger;
            const coso = { ...state, pokemonList: action.pokemonList}
            return coso
        case actionTypes.LOAD_POKEMONS_ERROR:
            debugger;
            break;
        default: 
            return state;
    }
}