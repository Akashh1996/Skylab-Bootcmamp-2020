import actionTypes from '../actions/actionTypes';

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_CART:{
            const cart = { ...state, cartArray: action.cartItem };
            return cart;
        }
        default:
            return state;
    }
}