import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductsSuccess(products) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    products,
  };
}

function requestProductsError(error) {
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

function requestProductSuccess(product) {
  return {
    type: actionTypes.GET_PRODUCT,
    product,
  };
}

function requestProductError(error) {
  return {
    type: actionTypes.GET_PRODUCT_ERROR,
    error,
  };
}

function requestAddProductsSuccess(product) {
  debugger;
  return {
    type: actionTypes.ADD_PRODUCT,
    product,
  };
}

function requestAddProductsError(error) {
  return {
    type: actionTypes.ADD_PRODUCT_ERROR,
    error,
  };
}

function requestCartSuccess(cart) {
  return {
    type: actionTypes.GET_CART,
    cart,
  };
}

function requestCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error,
  };
}

function requestDeleteProductSuccess(products) {
  return {
    type: actionTypes.DELETE_PRODUCT,
    products,
  };
}

function requestDeleteProductError(error) {
  return {
    type: actionTypes.DELETE_PRODUCT_ERROR,
    error,
  };
}

export function requestProducts() {
  return async (dispatch) => {
    try {
      const products = await axios.get('http://localhost:5000/products');
      dispatch(requestProductsSuccess(products.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

export function requestProduct(productId) {
  return async (dispatch) => {
    try {
      const product = await axios.get(`http://localhost:5000/products/${productId}`);
      dispatch(requestProductSuccess(product.data));
    } catch (error) {
      dispatch(requestProductError(error));
    }
  };
}

export function requestAddProducts(productId) {
  return async (dispatch) => {
    try {
      const product = await axios.post(`http://localhost:5000/products/${productId}`);
      debugger;
      dispatch(requestAddProductsSuccess(product.data));
    } catch (error) {
      dispatch(requestAddProductsError(error));
    }
  };
}

export function requestCart() {
  return async (dispatch) => {
    try {
      const cart = await axios.get('http://localhost:5000/cart');
      dispatch(requestCartSuccess(cart.data));
    } catch (error) {
      dispatch(requestCartError(error));
    }
  };
}

export function requestDeleteProduct(productId) {
  return async (dispatch) => {
    try {
      const cart = await axios.delete(`http://localhost:5000/cart/${productId}`);
      dispatch(requestDeleteProductSuccess(cart.data));
    } catch (error) {
      dispatch(requestDeleteProductError(error));
    }
  };
}
