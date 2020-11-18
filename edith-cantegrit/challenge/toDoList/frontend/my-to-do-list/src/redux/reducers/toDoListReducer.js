import actionTypes from '../actions/action-types';

export default function toDoListReducer(state={}, action) {
    let loading = '';
    switch(action.type) {
        case actionTypes.LOAD_TO_DO_LIST:
            loading = {...state, toDoList: action.toDoList};
            break;
        case actionTypes.LIST_ERROR:
            loading = {...state, loadingError: action.loadingError};
            break;
        case actionTypes.ITEM_DELETE:
            loading = {...state, itemDelete: action.itemDelete};
            break;
        default:
            loading = state;
    }
    return loading
}
