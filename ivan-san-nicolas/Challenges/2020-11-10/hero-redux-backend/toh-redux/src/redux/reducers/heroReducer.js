import actionTypes from '../actions/actionTypes';

export default function heroReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_HEROES:
            const heroes = {...state, heroesArray: action.heroesList};
            return heroes;
            
        default:
            return state;
    }
}