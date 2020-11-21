import actionTypes from '../actions/actionTypes';

export default function listReducer(state = {}, action) {
    switch (action.types) {
        case actionTypes.LOAD_LIST:
            return {...state, list: action.list};
        case actionTypes.LOAD_LIST_ERROR:
            return {...state, error: action.error};
    
        default:
            return state;
    }
}