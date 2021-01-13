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
      type: actionTypes.AUTH_LOGIN,
      user: 'user',
    };

    const result = userReducer(initialState, loginUserFireBase);
    expect(result).toEqual({ user: 'user', isLogged: true });
  });

  test('should throw error on adding user ', () => {
    const loginUserFireBaseError = {
      type: actionTypes.AUTH_LOGIN_ERROR,
      errorUser: 'error',
    };

    const result = userReducer(initialState, loginUserFireBaseError);
    expect(result).toEqual({ errorUser: 'error' });
  });

  test('should logOut the user and return to initial state ', () => {
    const logOutUserFireBaseError = {
      type: actionTypes.AUTH_LOGOUT,
    };

    const result = userReducer(initialState, logOutUserFireBaseError);
    expect(result).toEqual({ user: null, isLogged: false });
  });

  test('should laod all user Questions', () => {
    const loadUserQuestion = {
      type: actionTypes.LOAD_USER_QUESTION,
      userQuestion: 'userQuestion',
    };

    const result = userReducer(initialState, loadUserQuestion);
    expect(result).toEqual({ userQuestion: 'userQuestion' });
  });
  test('should add the user to state', () => {
    const addUser = {
      type: actionTypes.ADD_USER,
      newUser: 'newUser',
    };

    const result = userReducer(initialState, addUser);
    expect(result).toEqual({ user: 'newUser' });
  });
});
