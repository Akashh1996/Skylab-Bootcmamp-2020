import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:7000/todolist/';

export function requestTodoListSuccess(todoList) {
  return {
    type: actionTypes.LOAD_TODOLIST,
    todoList,
  };
}

export function requestTodoListError(error) {
  return {
    type: actionTypes.LOAD_TODOLIST_ERROR,
    error,
  };
}

export function requestTodoList() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      dispatch(requestTodoListSuccess(data));
    } catch (error) {
      dispatch(requestTodoListError(error));
    }
  };
}

export function postTodoListItemSuccess(todoListItem) {
  return {
    type: actionTypes.POST_TODOLIST_ITEM,
    todoListItem,
  };
}

export function postTodoListItemError(error) {
  return {
    type: actionTypes.POST_TODOLIST_ITEM_ERROR,
    error,
  };
}

export function addTodoListItem(newTodoListItem) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, { todoListItem: newTodoListItem });
      dispatch(postTodoListItemSuccess(data));
    } catch (error) {
      dispatch(postTodoListItemError(error));
    }
  };
}

export function deleteTodoListItemSuccess(todoListItemId) {
  return {
    type: actionTypes.DELETE_TODOLIST_ITEM,
    todoListItemId,
  };
}

export function deleteTodoListItemError(error) {
  return {
    type: actionTypes.DELETE_TODOLIST_ITEM_ERROR,
    error,
  };
}

export function deleteTodoListItem(removeTodoListItem) {
  return async (dispatch) => {
    try {
      const { data: { _id } } = await axios.delete(url, { data: removeTodoListItem });
      dispatch(deleteTodoListItemSuccess(_id));
    } catch (error) {
      dispatch(deleteTodoListItemError(error));
    }
  };
}
