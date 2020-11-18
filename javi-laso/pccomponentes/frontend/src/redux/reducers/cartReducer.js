import actionTypes from '../actions/action-types';

const initialState = { cartList: [], cartSize: 0 };

export default function cartReducer(state = initialState, action) {
  let index;
  let newCartList;
  switch (action.type) {
    case actionTypes.LOAD_SHOPPING_CART:
      return {
        ...state,
        cartList: [...action.cartList],
        cartSize: action.cartList.reduce((acc, cur) => acc + cur.quantity, 0),
      };
    case actionTypes.PUT_ITEM_IN_CART:
      index = state.cartList
        .findIndex((cartItem) => cartItem.product._id === action.cartItem.product._id);
      if (index >= 0) {
        newCartList = [...state.cartList];
        newCartList.splice(index, 1, action.cartItem);
      } else {
        newCartList = [...state.cartList, action.cartItem];
      }
      return {
        ...state,
        cartList: newCartList,
        cartSize: state.cartSize + 1,
      };
    case actionTypes.DELETE_ITEM_FROM_CART:
      index = state.cartList
        .findIndex((cartItem) => cartItem.product._id === action.cartItem.product._id);
      newCartList = [...state.cartList];
      newCartList.splice(index, 1, action.cartItem);
      return {
        ...state,
        cartList: newCartList,
        cartSize: state.cartSize > 0 ? state.cartSize - 1 : 0,
      };

    default:
      return state;
  }
}
