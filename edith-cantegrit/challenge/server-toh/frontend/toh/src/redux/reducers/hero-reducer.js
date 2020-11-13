import actionTypes from '../actions/action-types';

export default function heroReducer(state={}, action) {
    switch(action.type) {
        case actionTypes.LOAD_HEROES_LIST:
            debugger;
            const loading = {...state, heroList: action.heroList};
            return loading;
        case actionTypes.HERO_ERROR: 
            const loadError = {...state, error: action.errorHero};
            return loadError
        default:
            return state;
    }
}


