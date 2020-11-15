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

function requestProductDetailSuccess(product) {
  return {
    type: actionTypes.LOAD_PRODUCT_DETAIL,
    product,
  };
}
function requestProductsError(productsListError) {
  return {
    type: actionTypes.LOAD_PRODUCT_ERROR,
    productsListError,
  };
}

export function requestProducts() {
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

export function requestProductDetail(product) {
  debugger;
  return async (dispatch) => {
    const endpoint = `http://localhost:5000/list/${product}`;
    try {
      debugger;
      const productId = await axios.get(endpoint);
      dispatch(requestProductDetailSuccess(productId.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}
