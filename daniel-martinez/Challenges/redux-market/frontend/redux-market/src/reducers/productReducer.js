import actionTypes from '../actions/action-types';

export default function productReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, productList: action.products };

    case actionTypes.GET_PRODUCT:
      return { product: action.product };

    case actionTypes.GET_CART_PRODUCTS:
      return { ...state, cartProducts: action.cartProducts };

    case actionTypes.ADD_TO_CART:
      return { ...state, cartProducts: action.cartProducts };

    case actionTypes.DELETE_FROM_CART:
      return { ...state, cartProducts: action.cartProducts };

    default:
      return state;
  }
}
