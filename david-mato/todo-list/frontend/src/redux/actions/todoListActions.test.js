/* eslint-disable no-underscore-dangle */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import actionTypes from './actionTypes';
import * as actions from './todoListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('todoListActions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    store = null;
    axios.mockRestore();
  });

  it('should call requestTodoList and modify the store actions on resolve accordingly', async () => {
    const response = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
        {
          _id: '2',
          todoListItem: 'b',
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.requestTodoList());

    expect(store.getActions()).toEqual([{
      type: actionTypes.LOAD_TODOLIST,
      todoList: response.data,
    }]);
  });

  it('should call requestTodoList and modify the store actions on reject accordingly', async () => {
    const error = 'There was an error';

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.requestTodoList());

    expect(store.getActions()).toEqual([{
      type: actionTypes.LOAD_TODOLIST_ERROR,
      error,
    }]);
  });

  it('should call requestTodoListSuccess', () => {
    const data = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
        {
          _id: '2',
          todoListItem: 'b',
        },
      ],
    };

    expect(store.dispatch(actions.requestTodoListSuccess(data))).toEqual({
      type: actionTypes.LOAD_TODOLIST,
      todoList: data,
    });
  });

  it('should call requestTodoListError', () => {
    const error = 'There was an error';

    expect(store.dispatch(actions.requestTodoListError(error))).toEqual({
      type: actionTypes.LOAD_TODOLIST_ERROR,
      error,
    });
  });

  it('should call addTodoListItem and modify the store actions on success accordingly', async () => {
    const response = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
      ],
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.addTodoListItem({}));

    expect(store.getActions()).toEqual([{
      type: actionTypes.POST_TODOLIST_ITEM,
      todoListItem: response.data,
    }]);
  });

  it('should call addTodoListItem and modify the store actions on reject accordingly', async () => {
    const error = 'There was an error';

    axios.post.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.addTodoListItem({}));

    expect(store.getActions()).toEqual([{
      type: actionTypes.POST_TODOLIST_ITEM_ERROR,
      error,
    }]);
  });

  it('should call postTodoListItemSuccess', () => {
    const data = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
      ],
    };

    expect(store.dispatch(actions.postTodoListItemSuccess(data))).toEqual({
      type: actionTypes.POST_TODOLIST_ITEM,
      todoListItem: data,
    });
  });

  it('should call postTodoListItemError', () => {
    const error = 'There was an error';

    expect(store.dispatch(actions.postTodoListItemError(error))).toEqual({
      type: actionTypes.POST_TODOLIST_ITEM_ERROR,
      error,
    });
  });

  it('should call deleteTodoListItem and modify the store actions on success accordingly', async () => {
    const response = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
      ],
    };

    axios.delete.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.deleteTodoListItem({}));

    expect(store.getActions()).toEqual([{
      type: actionTypes.DELETE_TODOLIST_ITEM,
      todoListItemId: response.data._id,
    }]);
  });

  it('should call deleteTodoListItem and modify the store actions on error accordingly', async () => {
    const error = 'There was an error';

    axios.delete.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.deleteTodoListItem({}));

    expect(store.getActions()).toEqual([{
      type: actionTypes.DELETE_TODOLIST_ITEM_ERROR,
      error,
    }]);
  });

  it('should call deleteTodoListItemSuccess', () => {
    const response = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
      ],
    };
    const { data: [{ _id }] } = response;

    expect(store.dispatch(actions.deleteTodoListItemSuccess(_id))).toEqual({
      type: actionTypes.DELETE_TODOLIST_ITEM,
      todoListItemId: _id,
    });
  });

  it('should call deleteTodoListItemError', () => {
    const error = 'There was an error';

    expect(store.dispatch(actions.deleteTodoListItemError(error))).toEqual({
      type: actionTypes.DELETE_TODOLIST_ITEM_ERROR,
      error,
    });
  });
});
