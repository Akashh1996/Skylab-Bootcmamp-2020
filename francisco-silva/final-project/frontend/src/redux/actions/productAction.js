/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const shoppingCartUrl = 'http://localhost:6326/cart';

function requestProductsSuccess(productList) {
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

export function requestProducts() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:6326/products';
    try {
      const products = await axios.get(endpoint);
      dispatch(requestProductsSuccess(products.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

export function filterProductsBytype(typeOfProduct) {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    typeOfProduct,
  };
}

export function resetFilters() {
  return {
    type: actionTypes.RESET_FILTERS,
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
    const endpoint = `http://localhost:6326/products/${id}`;

    try {
      const product = await axios.get(endpoint, {
        params: {
          productId: id,
        },
      });
      console.log('Dispatching');

      dispatch(requestProductDetailSuccess(product.data));
    } catch (error) {
      dispatch(requestProductDetailError(error));
    }
  };
}

function createMessageSuccess(newMessage) {
  return {
    type: actionTypes.SEND_MESSAGE,
    newMessage,
  };
}

function createMessageError(error) {
  return {
    type: actionTypes.SEND_MESSAGE_ERROR,
    error,
  };
}

export function sendMessage(info) {
  const endpoint = 'http://localhost:6326/contact';
  return async (dispatch) => {
    try {
      const message = await axios.post(endpoint, info);
      dispatch(createMessageSuccess(message.data));
    } catch (error) {
      dispatch(createMessageError(error));
    }
  };
}

function createOrderSuccess(newOrder) {
  return {
    type: actionTypes.SEND_ORDER,
    newOrder,
  };
}

function createOrderError(error) {
  return {
    type: actionTypes.SEND_ORDER_ERROR,
    error,
  };
}

export function sendOrder(info) {
  const endpoint = 'http://localhost:6326/checkout';
  return async (dispatch) => {
    try {
      const order = await axios.post(endpoint, info);
      dispatch(createOrderSuccess(order.data));
    } catch (error) {
      dispatch(createOrderError(error));
    }
  };
}

function loadCartSuccess(cartList) {
  return {
    type: actionTypes.LOAD_SHOPPING_CART,
    cartList,
  };
}

function loadCartError(error) {
  return {
    type: actionTypes.LOAD_SHOPPING_CART_ERROR,
    error,
  };
}

export function loadShoppingCart() {
  return async (dispatch) => {
    try {
      const cartList = await axios.get(shoppingCartUrl);
      dispatch(loadCartSuccess(cartList.data));
    } catch (error) {
      dispatch(loadCartError(error));
    }
  };
}

function deleteItemCartSuccess(cartItem) {
  return {
    type: actionTypes.DELETE_ITEM_FROM_CART,
    cartItem,
  };
}

function deleteItemCartError(error) {
  return {
    type: actionTypes.DELETE_ITEM_FROM_CART_ERROR,
    error,
  };
}

export function deleteItemFromCart(item) {
  return async (dispatch) => {
    try {
      const obj = { data: { item } };
      await axios.delete(shoppingCartUrl, obj);
      dispatch(deleteItemCartSuccess(item.product._id));
    } catch (error) {
      dispatch(deleteItemCartError(error));
    }
  };
}

export function deleteAllFromCart() {
  const data = '';

  const config = {
    method: 'post',
    url: shoppingCartUrl,
    headers: { },
    data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

function putItemCartSuccess(cartItem) {
  return {
    type: actionTypes.PUT_ITEM_IN_CART,
    cartItem,
  };
}

function putItemCartError(error) {
  return {
    type: actionTypes.PUT_ITEM_IN_CART_ERROR,
    error,
  };
}

export function putItemInCart(item, quantity, addOrDelete) {
  return async (dispatch) => {
    try {
      const newCartItem = await axios.put(shoppingCartUrl, {
        item,
        quantity,
        addOrDelete,
      });
      if (newCartItem.data.quantity === 0) {
        dispatch(deleteItemFromCart(newCartItem.data.product[0]));
      }
      dispatch(putItemCartSuccess(newCartItem.data));
    } catch (error) {
      dispatch(putItemCartError(error));
    }
  };
}
