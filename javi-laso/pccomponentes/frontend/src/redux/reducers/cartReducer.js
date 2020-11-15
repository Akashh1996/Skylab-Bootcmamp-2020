import actionTypes from '../actions/action-types';

const initialState = { cartList: {}, cartSize: 0 };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPPING_CART:
      return {
        ...state,
        cartList: action.cartList,
        cartSize: Object.values(action.cartList).reduce((acc, cur) => acc + cur.length, 0),
      };
    case actionTypes.PUT_ITEM_IN_CART:
      return {
        ...state,
        cartList: action.cartList,
        cartSize: Object.values(action.cartList).reduce((acc, cur) => acc + cur.length, 0),
      };
    case actionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartList: action.cartList,
        cartSize: Object.values(action.cartList).reduce((acc, cur) => acc + cur.length, 0),
      };

    default:
      return state;
  }
}
