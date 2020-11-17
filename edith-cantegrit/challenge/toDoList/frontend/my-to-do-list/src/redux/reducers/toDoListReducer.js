import actionTypes from '../actions/action-types';

export default function toDoListReducer(state={}, action) {
    switch(action.type) {
        case actionTypes.LOAD_TO_DO_LIST:
            const loadingList = {...state, toDoList: action.toDoList};
            return loadingList;
        case actionTypes.LIST_ERROR:
            const loadingError = {...state, loadingError: action.loadingError};
            return loadingError;
        case actionTypes.ITEM_DELETE:
            const loadingItemDelete = {...state, itemDelete: action.itemDelete};
            return loadingItemDelete
        default:
            return state;
    }
}