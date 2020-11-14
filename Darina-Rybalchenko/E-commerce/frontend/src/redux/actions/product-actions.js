/* eslint-disable no-debugger */
/* eslint-disable indent */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductsSuccess(productsList) {
  return {
    type: actionTypes.LOAD_PRODUCT,
    productsList,
  };
}

function requestProductsError(productsListError) {
  return {
    type: actionTypes.LOAD_PRODUCT_ERROR,
    productsListError,
  };
}

export default function requestProducts() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:5000/list';
    try {
      const productList = await axios.get(endpoint);

      dispatch(requestProductsSuccess(productList.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}
