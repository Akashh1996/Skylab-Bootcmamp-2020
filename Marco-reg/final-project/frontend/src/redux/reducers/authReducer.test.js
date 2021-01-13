import authReducer from './authReducer';
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
    const result = authReducer(undefined, {});
    expect(result).toEqual({});
  });

  test('should add the auth user to initial State', () => {
    const loginUserFireBase = {
      type: actionTypes.LOGIN_USER_GOOGLE,
      user: 'user',
    };

    const result = authReducer(initialState, loginUserFireBase);

    expect(result).toEqual({ user: 'user' });
  });
  test('should add the auth login error when there is a fail', () => {
    const loginUserFireBase = {
      type: actionTypes.LOGIN_ERROR,
      loginError: 'error',
    };

    const result = authReducer(initialState, loginUserFireBase);

    expect(result).toEqual({ loginError: 'error' });
  });
  test('should logOut the user and return to initial state ', () => {
    const logOutUserFireBaseError = {
      type: actionTypes.SIGNOUT_SUCCESS,
    };

    const result = authReducer(initialState, logOutUserFireBaseError);
    expect(result).toEqual({ user: null });
  });
  test('should send signout error', () => {
    const logOutUserFireBaseError = {
      type: actionTypes.SIGNOUT_ERROR,
      signOutError: undefined,
    };
    const result = authReducer(initialState, logOutUserFireBaseError);
    expect(result).toEqual({ signOutError: undefined });
  });
});
