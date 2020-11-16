import axios from 'axios';
import actionTypes from './action-types';

function getProductsSucceed(products) {
  return {
    type: actionTypes.GET_PRODUCTS,
    products,
  };
}
export const getProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/products');
  dispatch(getProductsSucceed(response.data));
};

function getProductSucceed(product) {
  return {
    type: actionTypes.GET_PRODUCT,
    product,
  };
}

export const getProduct = (productId) => async (dispatch) => {
  const response = await axios.get(`http://localhost:5000/products/${productId}`);
  dispatch(getProductSucceed(response.data));
};

function getCartSucceed(cartProducts) {
  return {
    type: actionTypes.GET_CART_PRODUCTS,
    cartProducts,
  };
}
export const getCartProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/cart');
  dispatch(getCartSucceed(response.data));
};

export const addToCart = (product) => async () => {
  const cartProducts = await axios.put('http://localhost:5000/cart', product);
  return {
    type: actionTypes.ADD_TO_CART,
    cartProducts,
  };
};

export const deleteFromCart = (product) => async () => {
  const cartProducts = await axios.delete('http://localhost:5000/cart', product);
  return {
    type: actionTypes.DELETE_FROM_CART,
    cartProducts,
  };
};
