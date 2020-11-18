import axios from 'axios';
import actionTypes from './actionTypes';

const backURL = 'http://localhost:5000/todo/';

function requestListSuccess(listToDo) {
  return {
    type: actionTypes.LOAD_LIST,
    listToDo,
  };
}

function requestListError(error) {
  return {
    type: actionTypes.LOAD_LIST_ERROR,
    error,
  };
}

function requestAddItemSuccess(newItem) {
  return {
    type: actionTypes.ADD_ITEM,
    newItem,
  };
}

function requestAddItemError(error) {
  return {
    type: actionTypes.ADD_ITEM_ERROR,
    error,
  };
}

function requestUpdateItemSuccess(updatedItem) {
  return {
    type: actionTypes.UPDATE_ITEM,
    updatedItem,
  };
}

function requestUpdateItemError(error) {
  return {
    type: actionTypes.UPDATE_ITEM_ERROR,
    error,
  };
}

function requestDeleteItemSuccess(deletedItem) {
  return {
    type: actionTypes.DELETE_ITEM,
    deletedItem,
  };
}

function requestDeleteItemError(error) {
  return {
    type: actionTypes.DELETE_ITEM_ERROR,
    error,
  };
}

export function requestList() {
  return async (dispatch) => {
    try {
      const listToDo = await axios.get(backURL);
      dispatch(requestListSuccess(listToDo.data));
    } catch (error) {
      dispatch(requestListError(error));
    }
  };
}

export function requestAddItem(item) {
  return async (dispatch) => {
    try {
      const newItem = await axios.post(backURL, { description: item });
      dispatch(requestAddItemSuccess(newItem.data));
    } catch (error) {
      dispatch(requestAddItemError(error));
    }
  };
}

export function requestUpdateItem(item) {
  return async (dispatch) => {
    try {
      const updatedItem = await axios.put(backURL, item);
      dispatch(requestUpdateItemSuccess(updatedItem.data));
    } catch (error) {
      dispatch(requestUpdateItemError(error));
    }
  };
}

export function requestDeleteItem(item) {
  return async (dispatch) => {
    try {
      const deletedItem = await axios.delete(backURL, { data: item });
      dispatch(requestDeleteItemSuccess(deletedItem.data));
    } catch (error) {
      dispatch(requestDeleteItemError(error));
    }
  };
}
