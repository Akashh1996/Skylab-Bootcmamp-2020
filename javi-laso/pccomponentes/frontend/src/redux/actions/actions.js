/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './action-types';

const listUrl = 'http://localhost:2130/';
const shoppingCartUrl = 'http://localhost:2130/shoppingcart';

export function loadItemsSuccess(itemList) {
  return {
    type: actionTypes.LOAD_ITEMS_LIST,
    itemList,
  };
}

export function loadItemsList() {
  return async (dispatch) => {
    try {
      const itemList = await axios.get(listUrl);

      dispatch(loadItemsSuccess(itemList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function loadItemSuccess(item) {
  return {
    type: actionTypes.LOAD_ITEM,
    item,
  };
}

export function loadItem(itemId) {
  return async (dispatch) => {
    try {
      const item = await axios.get(`${listUrl}${itemId}`);
      dispatch(loadItemSuccess(item.data));
    } catch (error) {
      console.log((error));
    }
  };
}

export function loadCartSuccess(cartList) {
  return {
    type: actionTypes.LOAD_SHOPPING_CART,
    cartList,
  };
}

export function loadShoppingCart() {
  return async (dispatch) => {
    try {
      const cartList = await axios.get(shoppingCartUrl);

      dispatch(loadCartSuccess(cartList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function putItemCartSuccess(cartList) {
  return {
    type: actionTypes.PUT_ITEM_IN_CART,
    cartList,
  };
}

export function putItemInCart(item) {
  return async (dispatch) => {
    try {
      const cartListUpdated = await axios.put(shoppingCartUrl, {
        item,
      });

      dispatch(putItemCartSuccess(cartListUpdated.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteItemCartSuccess(cartList) {
  return {
    type: actionTypes.DELETE_ITEM_FROM_CART,
    cartList,
  };
}

export function deleteItemFromCart(item) {
  return async (dispatch) => {
    try {
      const config = { data: item };
      const cartListUpdated = await axios.delete(shoppingCartUrl, config);

      dispatch(deleteItemCartSuccess(cartListUpdated.data));
    } catch (error) {
      console.log(error);
    }
  };
}
