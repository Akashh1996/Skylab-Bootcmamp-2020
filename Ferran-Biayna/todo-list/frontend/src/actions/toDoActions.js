import axios from 'axios';
import actionTypes from './actionTypes';

function requestListSuccess(list) {
  return {
    type: actionTypes.LOAD_LIST,
    list,
  };
}

function requestListError(error) {
  return {
    type: actionTypes.LOAD_LIST_ERROR,
    error,
  };
}

function requestAddItemSuccess(item) {
  return {
    type: actionTypes.ADD_ITEM,
    item,
  };
}

function requestAddItemError(error) {
  return {
    type: actionTypes.ADD_ITEM_ERROR,
    error,
  };
}

function requestDeleteItemSuccess(item) {
  return {
    type: actionTypes.DELETE_ITEM,
    item,
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
      const List = await axios.get('http://localhost:5000/todo');
      dispatch(requestListSuccess(List.data));
    } catch (error) {
      dispatch(requestListError(error));
    }
  };
}

export function requestAddItem(item) {
  return async (dispatch) => {
    try {
      const newItem = await axios.post('http://localhost:5000/todo', { item });
      dispatch(requestAddItemSuccess(newItem.data));
    } catch (error) {
      dispatch(requestAddItemError(error));
    }
  };
}

export function requestDeleteItem(item) {
  return async (dispatch) => {
    try {
      const newList = await axios.delete('http://localhost:5000/todo', { item });
      dispatch(requestDeleteItemSuccess(newList.data));
    } catch (error) {
      dispatch(requestDeleteItemError(error));
    }
  };
}
