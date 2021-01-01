import actionTypes from '../actions/actionTypes';
export default function userReducer(state = [], action) {
    switch (action.type) {
        
        case actionTypes.LOAD_USERS:
            debugger;
            const list = {...state, userList: action.userList};
            debugger;
            return list;
            
        case actionTypes.LOAD_USERS_ERROR:
            const err = { ...state, error: action.error };
            return err;

        case actionTypes.CREATE_USER:
            return [...state, action.newUser];
        default:
            
            return state;
    }
}