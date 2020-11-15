import actionTypes from '../actions/actionTypes';

export default function productReducer(state = {}, action) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return { ...state, productList: action.productList };
    case actionTypes.LOAD_PRODUCTS_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
