/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductsSucces(productList) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    productList,
  };
}

function requestProductsError(error) {
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

// eslint-disable-next-line import/prefer-default-export
export function requestProducts() {
  debugger;
  return async (dispatch) => {
    const endpoint = 'http://localhost:1980/';
    try {
      const products = await axios.get(endpoint);

      dispatch(requestProductsSucces(products.data));
    } catch (error) {
      dispatch(requestProductsError);
    }
  };
}
