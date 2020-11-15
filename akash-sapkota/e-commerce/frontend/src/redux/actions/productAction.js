import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductSuccess(productList) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: actionTypes.LOAD_PRODUCTS,
    productList,
  };
}

function requestProductsError(error) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

export default function requestProduct() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1400/products/';
    try {
      // eslint-disable-next-line no-debugger
      debugger;
      const products = await axios.get(endpoint);
      dispatch(requestProductSuccess(products.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}
function requestProductDetailSuccess(productDetail) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: actionTypes.LOAD_PRODUCT_DETAIL,
    productDetail,
  };
}

function requestProductDetailError(error) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: actionTypes.LOAD_PRODUCT_DETAIL_ERROR,
    error,
  };
}

export function requestProductDetail(id) {
  return async (dispatch) => {
    const endpoint = `http://localhost:1400/products/${id}`;
    try {
      // eslint-disable-next-line no-debugger
      debugger;
      const products = await axios.get(endpoint, {
        params: {
          productId: id,
        },
      });
      dispatch(requestProductDetailSuccess(products.data));
    } catch (error) {
      dispatch(requestProductDetailError(error));
    }
  };
}

export function cleanUp() {
  return {
    type: actionTypes.PRODUCT_DETAIL_CLEANUP,
  };
}
