import reducer from './userListReducer';
import actionTypes from '../actions/actionTypes';

describe('todoListReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle LOAD_USERLIST', () => {
    expect(
      reducer([], {
        type: actionTypes.LOAD_USERLIST,
        userList: [{ _id: '1', name: 'Pepe' }],
      }),
    ).toEqual([
      { _id: '1', name: 'Pepe' },
    ]);
  });
});
