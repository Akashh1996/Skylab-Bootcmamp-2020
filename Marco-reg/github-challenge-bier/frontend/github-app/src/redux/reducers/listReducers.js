import actionTypes from '../actions/actionTypes';

export default function listReducer(state = {}, action) {
    switch (action.type) {
        
        case actionTypes.LOAD_LIST:
            debugger;
            return {...state, list: action.list};
        case actionTypes.LOAD_LIST_ERROR:
            return {...state, error: action.error};
    
        default:
            return state;
    }
}