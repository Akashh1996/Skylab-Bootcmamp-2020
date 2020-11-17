import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import actionTypes from './actionTypes';
import * as actions from './todoListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('todoListActions', () => {
  afterEach(() => {
    axios.mockRestore();
  });
  it('should call requestTodoList and then call requestTodoListSuccess on resolve', () => {
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

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    const store = mockStore();

    return store.dispatch(actions.requestTodoList()).then(() => {
      expect(store.dispatch(actions.requestTodoListSuccess(data))).toEqual({
        type: actionTypes.LOAD_TODOLIST,
        todoList: data,
      });
    });
  });

  //   it('should call requestTodoList and then call requestTodoListError on reject', () => {
  //     const error = 'There was an error';

  //     const store = mockStore();
  //     axios.get.mockImplementationOnce(() => Promise.reject());

  //     return store.dispatch(actions.requestTodoList()).then(() => {
  //       expect(store.dispatch(actions.requestTodoListError(error))).toEqual({
  //         type: actionTypes.LOAD_TODOLIST,
  //         error,
  //       });
  //     });
  //   });

  it('should call addTodoListItem and then call postTodoListItemSuccess on resolve', () => {
    const data = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
      ],
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(data));

    const store = mockStore();

    return store.dispatch(actions.addTodoListItem({})).then(() => {
      expect(store.dispatch(actions.postTodoListItemSuccess(data))).toEqual({
        type: actionTypes.POST_TODOLIST_ITEM,
        todoListItem: data,
      });
    });
  });

  it('should call deleteTodoListItem and then call deleteTodoListItemSuccess on resolve', () => {
    const data = {
      data: [
        {
          _id: '1',
          todoListItem: 'a',
        },
      ],
    };
    const { data: { _id } } = data;

    axios.delete.mockImplementationOnce(() => Promise.resolve(data));

    const store = mockStore();

    return store.dispatch(actions.deleteTodoListItem({})).then(() => {
      expect(store.dispatch(actions.deleteTodoListItemSuccess(_id))).toEqual({
        type: actionTypes.DELETE_TODOLIST_ITEM,
        todoListItemId: _id,
      });
    });
  });
});
