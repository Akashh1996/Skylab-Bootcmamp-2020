import actionTypes from './actionTypes';
import axios from 'axios';

const urlDB = 'http://localhost:5000/todolist/'

function requestItemsSuccess(items) {
    return {
      type: actionTypes.LOAD_TODOLIST,
      items,
    };
  }
  
  function requestItemsError(error) {
    return {
      type: actionTypes.LOAD_TODOLIST_ERROR,
      error,
    };
  }

export function requestItems() {
    return async (dispatch) => {
		const endpoint = urlDB;
		try {
      const items = await axios.get(endpoint);
			dispatch(requestItemsSuccess(items.data));
		} catch (error) {
			dispatch(requestItemsError(error));
		}
	};
}

export function deleteItems(itemId) {
  return async (dispatch) => {
  const endpoint =`${urlDB}/${itemId}`;
  try {
    await axios.delete(endpoint);
  } catch (error) {
    dispatch((error));
  }
};
}

export function putItems(item) {
  const newItem = {"item": item};
  return async (dispatch) => {
  const endpoint = urlDB;
  try {
    await axios.put(endpoint, newItem);
  } catch (error) {
    dispatch((error));
  }
};
}

export function cleanProductDetail() {
  return {
    type: actionTypes.CLEAN_PRODUCT_DETAIL,
  };
}