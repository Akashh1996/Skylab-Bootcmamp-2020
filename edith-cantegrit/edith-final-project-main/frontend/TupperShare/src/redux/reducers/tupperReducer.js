import actionTypes from '../actions/action-types';

export default function tupperReducer(state={}, action) {
    let loading = '';
    switch(action.type) {
        case actionTypes.LOAD_TUPPERS:
            loading = {...state, tupperList: action.tupperList};
            break;
        case actionTypes.LIST_ERROR:
            loading = {...state, errorList: action.errorList};
            break;
        case actionTypes.LOAD_TUPPER:
            loading = {...state, tupperDetail: action.tupperDetail};
            break;
        case actionTypes.DETAIL_ERROR:
            loading = {...state, errorDetail: action.errorDetail};
            break;
        default:
            loading = state;
    }
    return loading
}
