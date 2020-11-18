import actionTypes from '../actions/actionTypes';

export default function superReducer(state = {}, action) {
    let loading ='';
    switch (action.type) {
        case actionTypes.LOAD_TODOLIST:
            loading = {...state, items: action.items}
            break;
        case actionTypes.LOAD_TODOLIST_ERROR:
            break;
        case actionTypes.CLEAN_PRODUCT_DETAIL:
            loading = {...state, items: null}
            break;
        default:
            loading = state;
        }
        return loading;
}