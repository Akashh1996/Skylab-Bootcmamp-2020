import actionTypes from '../actions/actionTypes';
export default function userReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.LOAD_USERS:
            const list = {...state, productList: action.productList};
            return list;

        case actionTypes.LOAD_USERS_ERROR:
            const err = { ...state, error: action.error };
            return err;
        default:
            return state;
    }
}