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

export function requestProducts() {
  return async (dispatch) => {
    try {
      const products = await axios('http://localhost:5000/products');
      dispatch(requestProductsSuccess(products.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

export function createRandomVariable() {
  const randomNumber = Math.random();
  return {
    type: 'RANDOM',
    randomNumber,
  };
}
