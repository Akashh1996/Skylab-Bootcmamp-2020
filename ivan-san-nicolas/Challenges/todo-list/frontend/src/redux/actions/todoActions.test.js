import axios from 'axios';
import actionTypes from './actionTypes';
import { requestTodoList, requestError, requestTodoListSuccess } from './todoActions';

jest.mock('axios');

describe('requestTodoList Success and Error in todoActions', () => {
  test('should return an action object in requestTodoListSuccess', () => {
    const todoList = null;
    const action = requestTodoListSuccess(todoList);
    expect(action).toEqual({
      type: actionTypes.LOAD__LIST,
      todoList,
    });
  });
  test('should return an action object with an error when there is an error in requestError', () => {
    const error = null;
    const action = requestError(error);
    expect(action).toEqual({
      type: actionTypes.LOAD_ERROR,
      error,
    });
  });
});

describe('requestTodoList in todoActions', () => {
  test('should dispatch once when try case', () => {
    (async () => {
      axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
      await requestTodoList;
    })();
    const dispatch = jest.fn();
    requestTodoList();
    expect(dispatch).toHaveBeenCalled();
  });
});
