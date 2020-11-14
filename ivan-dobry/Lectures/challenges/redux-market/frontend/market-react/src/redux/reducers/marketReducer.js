import actionTypes from '../actions/actionTypes';

export default function marketReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS: {
      const products = { ...state, productArray: action.productList };
      return products;
    }

    case actionTypes.LOAD_PRODUCTS_ERROR: {
      const productError = { ...state, error: action.error };
      return productError;
    }

    default:
      return state;
  }
}
