import actionTypes from '../actions/actionTypes';

export default function listReducer(state = {}, action) {
    switch (action.type) {
        
        case actionTypes.LOAD_LIST:
            
            return {...state, list: action.list};
        case actionTypes.LOAD_LIST_ERROR:
            return {...state, error: action.error};
        case actionTypes.CREATE_PROJECT:
            return [...state, action.newProject];
    
        default:
            return state;
    }
}