import actionTypes from '../actions/ActionTypes';
import usersReducer from './usersReducer';

describe('usersReducer', () => {
  let state = {};

  afterEach(() => {
    state = {};
  });

  test('should return an object with userItem property', () => {
    const action = {
      type: actionTypes.LOAD_USER,
      user: 'user',
    };
    const newState = usersReducer(state, action);
    const expectedState = {
      userItem: 'user',
    };

    expect(newState).toEqual(expectedState);
  });

  test('should return an object with userId property', () => {
    const action = {
      type: actionTypes.LOAD_USER_ID,
      userId: 'userId',
    };
    const newState = usersReducer(state, action);
    const expectedState = {
      userId: 'userId',
    };

    expect(newState).toEqual(expectedState);
  });

  test("should return an object like initial State when action type don't match any switch case", () => {
    const action = {
      type: 'none',
    };
    const newState = usersReducer(state, action);
    const expectedState = {};

    expect(newState).toEqual(expectedState);
  });

  test('should return an object with an error property', () => {
    const action = {
      type: 'LOAD_ERROR',
    };
    const newState = usersReducer(state, action);
    const expectedState = {};

    expect(newState).toEqual(expectedState);
  });

  test('state should be an empty object when there is no state argument', () => {
    const action = {
      type: 'none',
    };

    const newState = usersReducer(undefined, action);

    expect(newState).toEqual({});
  });
});
