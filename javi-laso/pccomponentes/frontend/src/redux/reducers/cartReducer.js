import actionTypes from '../actions/action-types';

export default function cartReducer(state = { cartList: [], cartSize: 0 }, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPPING_CART:
      return {
        ...state,
        cartList: action.cartList,
        cartSize: action.cartList.length,
      };
    case actionTypes.PUT_ITEM_IN_CART:
      return {
        ...state,
        cartList: action.cartList,
        cartSize: action.cartList.length,
      };
    case actionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartList: action.cartList,
        cartSize: action.cartList.length,
      };

    default:
      return state;
  }
}
