import actionTypes from '../actions/actionTypes';

export default function superReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_TODOLIST:
            return {...state, items: action.items}
        case actionTypes.LOAD_TODOLIST_ERROR:
            break;
        default:
            return state;
    }
}