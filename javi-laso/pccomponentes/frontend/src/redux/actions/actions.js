/* eslint-disable no-debugger */
/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './action-types';

const listUrl = 'http://localhost:2130/';
const shoppingCartUrl = 'http://localhost:2130/shoppingcart';

function loadItemsSuccess(itemList) {
  return {
    type: actionTypes.LOAD_ITEMS_LIST,
    itemList,
  };
}

export function loadItemsList() {
  return async (dispatch) => {
    try {
      const itemList = await axios(listUrl);

      dispatch(loadItemsSuccess(itemList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

function loadItemSuccess(item) {
  return {
    type: actionTypes.LOAD_ITEM,
    item,
  };
}

export function loadItem(itemId) {
  return async (dispatch) => {
    try {
      const item = await axios(`${listUrl}${itemId}`);

      dispatch(loadItemSuccess(item));
    } catch (error) {
      console.log((error));
    }
  };
}

function loadCartSuccess(cartList) {
  return {
    type: actionTypes.LOAD_SHOPPING_CART,
    cartList,
  };
}

export function loadShoppingCart() {
  return async (dispatch) => {
    try {
      const cartList = await axios(shoppingCartUrl);

      dispatch(loadCartSuccess(cartList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

function putItemCartSuccess(cartList) {
  return {
    type: actionTypes.PUT_ITEM_IN_CART,
    cartList,
  };
}

export function putItemInCart(item) {
  return async (dispatch) => {
    try {
      const cartListUpdated = await axios.put(shoppingCartUrl, {
        params: { item },
      });

      dispatch(putItemCartSuccess(cartListUpdated));
    } catch (error) {
      console.log(error);
    }
  };
}

function deleteItemCartSuccess(cartList) {
  return {
    type: actionTypes.DELETE_ITEM_FROM_CART,
    cartList,
  };
}

export function deleteItemFromCart(item) {
  return async (dispatch) => {
    try {
      const cartListUpdated = await axios.delete(shoppingCartUrl, {
        params: { item },
      });

      dispatch(deleteItemCartSuccess(cartListUpdated));
    } catch (error) {
      console.log(error);
    }
  };
}
