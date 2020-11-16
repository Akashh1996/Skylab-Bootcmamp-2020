import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductsSuccess(productsList) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    productsList,
  };
}

function requestProductsError(error) {
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

export function requestProducts() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:5000/products/';
    try {
      const products = await axios.get(endpoint);
      dispatch(requestProductsSuccess(products.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

function requestProductSuccess(product) {
  return {
    type: actionTypes.LOAD_PRODUCT,
    product,
  };
}

function requestProductError(error) {
  return {
    type: actionTypes.LOAD_PRODUCT_ERROR,
    error,
  };
}

export function requestProduct(productId) {
  return async (dispatch) => {
    const endpoint = `http://localhost:5000/products/select/${productId}`;
    try {
      const product = await axios.get(endpoint);
      dispatch(requestProductSuccess(product.data));
    } catch (error) {
      dispatch(requestProductError(error));
    }
  };
}

export function cleanProductDetail() {
  return {
    type: actionTypes.CLEAN_PRODUCT_DETAIL,
  };
}

export function putBasket(basketProduct) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:5000/products/basket';
    await axios.put(endpoint, { basketProduct });
  };
}

function requestBasketSuccess(basket) {
  return {
    type: actionTypes.LOAD_BASKET,
    basket,
  };
}

export function getBasket() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:5000/products/basket/';
    const basket = await axios.get(endpoint);
    dispatch(requestBasketSuccess(basket.data));
  };
}

export function deleteProduct(productId) {
  return async (dispatch) => {
    const endpoint = `http://localhost:5000/products/basket/${productId}`;
    await axios.delete(endpoint);
  };
}
