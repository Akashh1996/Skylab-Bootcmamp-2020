import axios from 'axios';
import actionTypes from './actionsTypes';

const URL = 'http://localhost:5000/';

function getCartList(cartList) {
  return {
    type: actionTypes.LOAD_CART_LIST,
    cartList,
  };
}

function addProductToCartSuccess(error) {
  return {
    error,
  };
}

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

export function addProductToCart(product) {
  return async (dispatch) => {
    const endpoint = 'cart';
    try {
      await axios.post(`${URL}${endpoint}`, {
        ...product,
      });
    } catch (error) {
      dispatch(addProductToCartSuccess(error));
    }
  };
}

export function getCurrentCart() {
  return async (dispatch) => {
    const endpoint = 'cart';
    try {
      const cartList = await axios.get(`${URL}${endpoint}`);
      dispatch(getCartList(cartList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function delProductFromCart(cartId) {
  // eslint-disable-next-line no-debugger
  debugger;
  return async (dispatch) => {
    const endpoint = 'cart';
    try {
      await axios.delete(`${URL}${endpoint}`, {
        data: { cartId },
      });
      dispatch(getCurrentCart());
    } catch (error) {
      console.log(error);
    }
  };
}
