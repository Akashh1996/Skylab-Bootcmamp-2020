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

function requestUpdateItemSuccess(UpdatedItem) {
  return {
    type: actionTypes.UPDATE_ITEM,
    UpdatedItem,
  };
}

function requestUpdateItemError(error) {
  return {
    type: actionTypes.UPDATE_ITEM_ERROR,
    error,
  };
}

function requestDeleteItemSuccess(DeletedItem) {
  return {
    type: actionTypes.DELETE_ITEM,
    DeletedItem,
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
      const list = await axios.get(backURL);
      dispatch(requestListSuccess(list.data));
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
      const UpdatedItem = await axios.put(backURL, item);
      dispatch(requestUpdateItemSuccess(UpdatedItem.data));
    } catch (error) {
      dispatch(requestUpdateItemError(error));
    }
  };
}

export function requestDeleteItem(item) {
  return async (dispatch) => {
    try {
      const DeletedItem = await axios.delete(backURL, item);
      dispatch(requestDeleteItemSuccess(DeletedItem.data));
    } catch (error) {
      dispatch(requestDeleteItemError(error));
    }
  };
}
