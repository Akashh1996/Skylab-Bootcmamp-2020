/* eslint-disable no-debugger */
/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionsTypes';

const endpointAPI = 'http://localhost:5000/';

function getCartList(cartList) {
  return {
    type: actionTypes.LOAD_CART_LIST,
    cartList,
  };
}

function loadProductsSuccess(productslist) {
  return {
    type: actionTypes.LOAD_PRODUCT_LIST,
    productslist,
  };
}

function getProductoByIdSuccess(productDetail) {
  return {
    type: actionTypes.LOAD_PRODUCT_BY_MODEL,
    productDetail,
  };
}

export function loadProductList() {
  return async (dispatch) => {
    try {
      const productsList = await axios.get(`${endpointAPI}`);
      dispatch(loadProductsSuccess(productsList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetailProduct(productModel) {
  return async (dispatch) => {
    const endpoint = 'product';
    try {
      const productDetail = await axios.get(`${endpointAPI}${endpoint}/${productModel}`);
      dispatch(getProductoByIdSuccess(productDetail.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCurrentCart() {
  return async (dispatch) => {
    const endpoint = 'cart';
    try {
      const cartList = await axios.get(`${endpointAPI}${endpoint}`);
      dispatch(getCartList(cartList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addProductToCart(product) {
  return async () => {
    const endpoint = 'cart';
    try {
      await axios.post(`${endpointAPI}${endpoint}`, {
        ...product,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function delProductFromCart(cartId) {
  return async (dispatch) => {
    const endpoint = 'cart';
    try {
      await axios.delete(`${endpointAPI}${endpoint}`, {
        data: { cartId },
      });
      dispatch(getCurrentCart());
    } catch (error) {
      console.log(error);
    }
  };
}
