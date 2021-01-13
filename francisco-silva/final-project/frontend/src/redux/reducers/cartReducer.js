/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

const initialState = { cartList: [], cartSize: 0 };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPPING_CART:
      return {
        ...state,
        cartList: action.cartList,
        cartSize: action.cartList.reduce((acc, cur) => acc + cur.quantity, 0),
      };

    case actionTypes.PUT_ITEM_IN_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.cartItem],
        cartSize: state.cartSize + 1,
      };

    case actionTypes.DELETE_ITEM_FROM_CART:
      const filteredCartList = state.cartList
        .filter((item) => item._id !== action.cartItem);
      return {
        ...state,
        cartList: filteredCartList,
        cartSize: state.cartSize > 0 ? state.cartSize - 1 : 0,
      };

    default:
      return state;
  }
}
