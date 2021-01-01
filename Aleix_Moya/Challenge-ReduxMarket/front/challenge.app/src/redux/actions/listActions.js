/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

let carritoList = [];

function requestBackendSuccess(productList) {
  return {
    type: actionTypes.LOAD_LIST,
    productList,
  };
}

function requestBackendError(error) {
  return {
    type: actionTypes.LOAD_LIST_ERROR,
    error,
  };
}

function addToCarritoSuccess(updatedCarritoList) {
  return {
    type: actionTypes.ADD_TO_CARRITO,
    updatedCarritoList,
  };
}
function deleteFromCarritoSuccess(updatedCarritoList) {
  return {
    type: actionTypes.DELETE_FROM_CARRITO,
    updatedCarritoList,
  };
}

export function requestList() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:2000/list';
    try {
      const productList = await axios.get(endpoint);
      dispatch(requestBackendSuccess(productList.data));
    } catch (error) {
      dispatch(requestBackendError(error));
    }
  };
}
export function requestFav() {
  return {
    type: actionTypes.SHOW_FAVLIST,
    carritoList,
  };
}
export function addToCarrito(item) {
  return async (dispatch) => {
    if (!carritoList || !carritoList.length) {
      carritoList = [];
      carritoList.push(item);
      dispatch(addToCarritoSuccess(carritoList));
    } else {
      let flag = 0;
      // eslint-disable-next-line array-callback-return
      carritoList.map((listedItem) => {
        if (item.name === listedItem.name) {
          flag = 1;
        }
      });
      if (flag === 0) {
        carritoList.push(item);
        dispatch(addToCarritoSuccess(carritoList));
      }
    }
  };
}
export function deleteFromCarrito(item) {
  return async (dispatch) => {
    for (let i = 0; i < carritoList.length; i++) {
      if (carritoList[i].name === item.name) {
        carritoList.splice(i, 1);
      }
    }
    dispatch(deleteFromCarritoSuccess(carritoList));
  };
}
