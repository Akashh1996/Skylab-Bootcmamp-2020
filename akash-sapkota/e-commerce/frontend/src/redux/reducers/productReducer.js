import actionTypes from '../actions/actionTypes';

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      // eslint-disable-next-line no-debugger
      debugger;
      return { ...state, productList: action.productList };
    case actionTypes.LOAD_PRODUCTS_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
