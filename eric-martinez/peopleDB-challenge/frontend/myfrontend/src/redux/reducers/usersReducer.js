import actionTypes from '../actions/actionsTypes';

export default function usersReducers(state = [], action){
    switch (action.type) {
        case actionTypes.LOAD_USERS:
            return {...state, userList: action.users}
        case actionTypes.LOAD_USERS_ERROR:
            return {...state, error: action.error}
        default:
            return state;
    }
}