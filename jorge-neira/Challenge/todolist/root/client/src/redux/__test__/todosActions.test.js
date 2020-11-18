import axios from 'axios';
import fetchMock from 'fetch-mock';
import { apiMiddleware, ApiError } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import actionTypes from '../actions/actionTypes';
import * as todosActions from '../actions/todosActions';
import * as actions from '../reducers';

jest.mock('axios');

// const URL = 'http://localhost:5000/todos';

const createStore = configureMockStore([apiMiddleware]);
const store = createStore(actions.initialState);

describe('todos Actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('loadTodos', async () => {
    // arrange
    const response = {
      todoId: 1,
      todoDescription: 'string',
    };

    fetchMock.getOnce('/todos',
      { body: { results: response } });

    const expectedActions = { type: actionTypes.LOAD_TODOS, todos: response };
    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // describe('loadTodo', () => {
  //   beforeEach(() => {
  //     mockObj = { data: { todoId: 1, todoDescription: 'String' } };
  //   });
  //   test('Should call axios GET method', async () => {
  //     axios.get.mockImplementationOnce(() => Promise.resolve(mockObj));
  //     await store.dispatch(todosActions.loadTodos());
  //     expect(axios.get).toHaveBeenCalledWith(URL);
  //   });
  //   test('Should call axios GET method and return happy path ', async () => {
  //     axios.post.mockImplementationOnce(() => Promise.resolve(mockObj));
  //     await store.dispatch(todosActions.loadTodos());
  //     expect(store.dispatch(todosActions.loadTodosSuccess(mockObj))).toEqual({
  //       type: 'LOAD_TODOS',
  //       todos: mockObj,
  //     });
  //   });
  //   test('Should call axios GET method and return happy path ', async () => {
  //     axios.post.mockImplementationOnce(() => Promise.reject(Error));
  //     await store.dispatch(todosActions.loadTodos());
  //     expect(store.dispatch(errorRequest())).toEqual({
  //       type: actionTypes.ERROR_REQUEST,
  //       error: 'error',
  //     });
  //   });
  // });
});
