import axios from 'axios';
import actionTypes from './actionsTypes';

const URL = 'http://localhost:5000/';

function loadProductsSuccess(productslist) {
  return {
    type: actionTypes.LOAD_LAPTOP_LIST,
    productslist,
  };
}

function loadProductsFailure({ type }) {
  return {
    type,
  };
}

function getProductoByIdSuccess(productDetail) {
  return {
    type: actionTypes.LOAD_LAPTOP_BY_ID,
    productDetail,
  };
}

function getProductoByIdFailure({ type }) {
  return {
    type,
  };
}

export function loadProductList() {
  return async (dispatch) => {
    try {
      const productsList = await axios.get(`${URL}`);
      dispatch(loadProductsSuccess(productsList.data));
    } catch (error) {
      dispatch(loadProductsFailure({
        type: actionTypes.LOAD_LAPTOP_ERROR,
      }));
    }
  };
}

export function getDetailProduct(productModel) {
  debugger;
  return async (dispatch) => {
    const endpoint = 'product';
    try {
      debugger;
      const productDetail = await axios.get(`${URL}${endpoint}/${productModel}`);
      dispatch(getProductoByIdSuccess(productDetail.data));
    } catch (error) {
      dispatch(getProductoByIdFailure());
    }
  };
}
