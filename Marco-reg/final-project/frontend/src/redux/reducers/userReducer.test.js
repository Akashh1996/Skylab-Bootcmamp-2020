import userReducer from './userReducer';
import actionTypes from '../actions/actionTypes';

describe('UserReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  test('should return the initial State', () => {
    const result = userReducer(undefined, {});
    expect(result).toEqual({});
  });

  test('should add the auth user to initial State', () => {
    const loginUserFireBase = {
      type: actionTypes.LOAD_USER,
      user: 'user',
    };

    const result = userReducer(initialState, loginUserFireBase);

    expect(result).toEqual({ user: 'user' });
  });
  test('should add the auth user to initial State', () => {
    const loginUserFireBase = {
      type: actionTypes.LOAD_USER_ERROR,
      error: 'error',
    };

    const result = userReducer(initialState, loginUserFireBase);

    expect(result).toEqual({ error: 'error' });
  });
});
