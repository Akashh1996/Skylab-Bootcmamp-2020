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
    default:
      return state;
  }
}
