/* eslint-disable no-unused-vars */
import axios from 'axios';
import { func } from 'prop-types';
import actionTypes from './actionTypes';

function requestProductSuccess(productList) {
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

export default function requestProduct() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1400/products/';
    try {
      const products = await axios.get(endpoint);
      dispatch(requestProductSuccess(products.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}
function requestProductDetailSuccess(productDetail) {
  return {
    type: actionTypes.LOAD_PRODUCT_DETAIL,
    productDetail,
  };
}

function requestProductDetailError(error) {
  return {
    type: actionTypes.LOAD_PRODUCT_DETAIL_ERROR,
    error,
  };
}

export function requestProductDetail(id) {
  return async (dispatch) => {
    const endpoint = `http://localhost:1400/products/select/${id}`;
    try {
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

function addCartSuccess(productCart) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: actionTypes.ADD_ITEM_CART,
    productCart,
  };
}

function addCartError(error) {
  return {
    type: actionTypes.ADD_ITEM_CART_ERROR,
    error,
  };
}

export function addCart(cartProduct) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1400/products/cart';
    try {
    // eslint-disable-next-line no-debugger
      debugger;
      const addCartProduct = await axios.post(endpoint, cartProduct);
      dispatch(addCartSuccess(addCartProduct.data));
    } catch (error) {
      dispatch(addCartError(error));
    }
  };
}

function requestCartSuccess(productCartList) {
  return {
    type: actionTypes.LOAD_PRODUCT_CART,
    productCartList,
  };
}

function requestCartError(error) {
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

export function requestCart() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1400/products/cart';
    try {
      // eslint-disable-next-line no-debugger
      debugger;
      const products = await axios.get(endpoint);
      dispatch(requestCartSuccess(products.data));
    } catch (error) {
      dispatch(requestCartError(error));
    }
  };
}

export function deleteProductCart(productId) {
  return async (dispatch) => {
    const endpoint = `http://localhost:1400/products/cart/${productId}`;
    await axios.delete(endpoint);
  };
}
