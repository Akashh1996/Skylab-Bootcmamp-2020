/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './action-types';

const listUrl = 'http://localhost:2130/';
const shoppingCartUrl = 'http://localhost:2130/shoppingcart';

// const user = 'user1';

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

export function putItemCartSuccess(cartItem) {
  return {
    type: actionTypes.PUT_ITEM_IN_CART,
    cartItem,
  };
}

export function putItemInCart(item) {
  return async (dispatch) => {
    try {
      const newCartItem = await axios.patch(shoppingCartUrl, {
        item,
      });

      dispatch(putItemCartSuccess(newCartItem.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteItemCartSuccess(cartItem) {
  return {
    type: actionTypes.DELETE_ITEM_FROM_CART,
    cartItem,
  };
}

export function deleteItemFromCart(item) {
  return async (dispatch) => {
    try {
      const config = { data: item };
      const { data } = await axios.delete(shoppingCartUrl, config);

      dispatch(deleteItemCartSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterItems(productType) {
  return {
    type: actionTypes.FILTER_ITEMS,
    productType,
  };
}
