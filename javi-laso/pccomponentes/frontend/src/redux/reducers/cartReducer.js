import actionTypes from '../actions/action-types';

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPPING_CART:
      return { ...state, cartList: action.cartList };
    case actionTypes.PUT_ITEM_IN_CART:
      return { ...state, cartList: action.cartList };
    case actionTypes.DELETE_ITEM_FROM_CART:
      return { ...state, cartList: action.cartList };

    default:
      return state;
  }
}
