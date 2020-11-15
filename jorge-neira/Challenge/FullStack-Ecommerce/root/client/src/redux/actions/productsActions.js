import axios from 'axios';
import actionTypes from './actionsTypes';

const URL = 'http://localhost:5000/';

function loadProductsSuccess(productslist) {
  return {
    type: actionTypes.LOAD_PRODUCT_LIST,
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
    type: actionTypes.LOAD_PRODUCT_BY_MODEL,
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
      dispatch(loadProductsFailure());
    }
  };
}

export function getDetailProduct(productModel) {
  return async (dispatch) => {
    const endpoint = 'product';
    try {
      const productDetail = await axios.get(`${URL}${endpoint}/${productModel}`);
      dispatch(getProductoByIdSuccess(productDetail.data));
    } catch (error) {
      dispatch(getProductoByIdFailure());
    }
  };
}
