import actionTypes from './actionTypes';
import axios from 'axios';

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
		const endpoint = 'http://localhost:5000/todolist/';
		try {
      const items = await axios.get(endpoint);
			dispatch(requestItemsSuccess(items.data));
		} catch (error) {
			dispatch(requestItemsError(error));
		}
	};
}

function deleteItemsSuccess(items) {
  return {
    type: actionTypes.DELETE_ITEM,
    items,
  };
}

function deleteItemsError(error) {
  return {
    type: actionTypes.DELETE_ITEM_ERROR,
    error,
  };
}

export function deleteItems(itemId) {
  return async (dispatch) => {
  const endpoint = `http://localhost:5000/todolist/${itemId}`;
  try {
    const items = await axios.delete(endpoint);
    dispatch(deleteItemsSuccess(items.data));
  } catch (error) {
    dispatch(deleteItemsError(error));
  }
};
}

function putItemsSuccess(items) {
  return {
    type: actionTypes.PUT_ITEM,
    items,
  };
}

function putItemsError(error) {
  return {
    type: actionTypes.PUT_ITEM_ERROR,
    error,
  };
}

export function putItems(item) {
  let {_id, ...newItem} = item;
  return async (dispatch) => {
  const endpoint = `http://localhost:5000/todolist/`;
  try {
    const items = await axios.put(endpoint, { ...newItem });
    dispatch(putItemsSuccess(items.data));
  } catch (error) {
    dispatch(putItemsError(error));
  }
};
}