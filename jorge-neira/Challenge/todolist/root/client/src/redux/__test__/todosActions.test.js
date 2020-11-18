import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../actions/todosActions';
import actionTypes from '../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let testData;
  beforeEach(() => {
    testData = { todoId: 1, todoDescription: 'String' };
  });
  afterEach(() => {
    fetchMock.restore();
  });

  test('creates FETCH_TODOS_SUCCESS when fetching todos has been done', async () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: actionTypes.LOAD_TODOS, body: { todos: ['do something'] } },
    ];
    const store = mockStore({ todos: [] });
    axios.get.mockImplementationOnce(() => Promise.resolve('done'));
    await store.dispatch(actions.loadTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
