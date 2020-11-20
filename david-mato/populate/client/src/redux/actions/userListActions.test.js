/* eslint-disable no-underscore-dangle */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import actionTypes from './actionTypes';
import * as actions from './userListActions';

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

  it('should call requestUserList and modify the store actions on resolve accordingly', async () => {
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
    await store.dispatch(actions.requestUserList());

    expect(store.getActions()).toEqual([{
      type: actionTypes.LOAD_USERLIST,
      userList: response.data,
    }]);
  });

  it('should call requestUserList and modify the store actions on reject accordingly', async () => {
    const error = 'There was an error';

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.requestUserList());

    expect(store.getActions()).toEqual([{
      type: actionTypes.LOAD_USERLIST_ERROR,
      error,
    }]);
  });

  it('should call requestUserListSuccess', () => {
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

    expect(store.dispatch(actions.requestUserListSuccess(data))).toEqual({
      type: actionTypes.LOAD_USERLIST,
      userList: data,
    });
  });

  it('should call requestUserListError', () => {
    const error = 'There was an error';

    expect(store.dispatch(actions.requestUserListError(error))).toEqual({
      type: actionTypes.LOAD_USERLIST_ERROR,
      error,
    });
  });
});
