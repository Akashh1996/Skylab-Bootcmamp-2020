import actionTypes from '../actions/actionTypes';

let answer = null;

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      answer = { ...state, products: action.products };
      return answer;
    case actionTypes.LOAD_PRODUCTS_ERROR:
      answer = { ...state, error: action.error };
      return answer;
    case actionTypes.GET_PRODUCT:
      answer = { ...state, product: action.product };
      return answer;
    case actionTypes.GET_PRODUCT_ERROR:
      answer = { ...state, error: action.error };
      return answer;
    case actionTypes.ADD_PRODUCT:
      answer = { ...state };
      return answer;
    case actionTypes.ADD_PRODUCT_ERROR:
      answer = { ...state };
      return answer;
    case actionTypes.GET_CART:
      answer = { ...state, cart: action.cart };
      return answer;
    case actionTypes.GET_CART_ERROR:
      answer = { ...state, error: action.error };
      return answer;
    case actionTypes.DELETE_PRODUCT:
      answer = { ...state, cart: action.cart };
      return answer;
    case actionTypes.DELETE_PRODUCT_ERROR:
      answer = { ...state, error: action.error };
      return answer;
    default:
      return state;
  }
}
