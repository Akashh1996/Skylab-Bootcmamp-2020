import reducer from './todoListReducer';
import actionTypes from '../actions/actionTypes';

describe('todoListReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle LOAD_TODOLIST', () => {
    expect(
      reducer([], {
        type: actionTypes.LOAD_TODOLIST,
        todoList: [{ _id: '1', todoListItem: 'Run the tests' }],
      }),
    ).toEqual([
      { _id: '1', todoListItem: 'Run the tests' },
    ]);
  });

  it('should handle POST_TODOLIST_ITEM', () => {
    expect(
      reducer([], {
        type: actionTypes.POST_TODOLIST_ITEM,
        todoListItem: { _id: '1', todoListItem: 'Run the tests' },
      }),
    ).toEqual([
      { _id: '1', todoListItem: 'Run the tests' },
    ]);
  });

  it('should handle DELETE_TODOLIST_ITEM', () => {
    expect(
      reducer([{ _id: '1', todoListItem: 'Run the tests' }], {
        type: actionTypes.DELETE_TODOLIST_ITEM,
        todoListItemId: '1',
      }),
    ).toEqual([]);
  });
});
