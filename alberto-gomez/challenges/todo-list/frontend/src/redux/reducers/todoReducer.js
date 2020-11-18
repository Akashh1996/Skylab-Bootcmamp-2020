import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = [], action) {
    let newState = null
    switch (action.type) {
        case actionTypes.LOAD_LIST:
            newState = {...state, listArray: action.taskList};
            break;
        case actionTypes.LOAD_LIST_ERROR:
            newState = {...state, error: action.error};
            break;
        default:
            newState = {...state};
            break;
    }
    return newState;
}