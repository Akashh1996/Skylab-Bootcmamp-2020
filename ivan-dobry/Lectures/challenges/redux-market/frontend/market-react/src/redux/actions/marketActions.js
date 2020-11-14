/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductsSucces(productList) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    productList,
  };
}

function requestProductDetailSucces(productDetail) {
  return {
    type: actionTypes.LOAD_PRODUCT_DETAIL,
    productDetail,
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

// eslint-disable-next-line no-unused-vars
export function requestProductDetail(detailId) {
  return async (dispatch) => {
    const endpoint = `http://localhost:1980/detail?id=${detailId}`;
    try {
      const products = await axios.get(endpoint);

      dispatch(requestProductDetailSucces(products.data));
    } catch (error) {
      dispatch(requestProductsError);
    }
  };
}
