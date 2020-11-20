import actionTypes from '../actions/action-types';

export default function agendaReducer(state={}, action) {
    let loading = {};
    switch(action.type) {
        case actionTypes.LOAD_AGENDA_LIST:
            loading = {...state, agendaList: action.agendaList};
            break;
        case actionTypes.LIST_ERROR:
            loading = {...state, errorList: action.errorList};
            break;
        case actionTypes.LOAD_USER:
            loading = {...state, userInfo: action.userInfo};
            break;
        default:
            loading = state;
    }
    return loading
}
