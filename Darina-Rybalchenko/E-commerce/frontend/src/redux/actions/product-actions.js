/* eslint-disable no-debugger */
/* eslint-disable indent */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductsSuccess(productsList) {
    debugger;
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
    debugger;
  return async (dispatch) => {
      debugger;
    const endpoint = 'http://localhost:5000/list';
    try {
        debugger;
      const productList = await axios.get(endpoint);
      debugger;
      dispatch(requestProductsSuccess(productList.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}
