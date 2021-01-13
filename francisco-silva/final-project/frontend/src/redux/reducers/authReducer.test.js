import authReducer from './authReducer';
import actionTypes from '../actions/actionTypes';

describe('reducers', () => {
  let initialState;
  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  describe('authReducer', () => {
    test('should return the newState without action', () => {
      const result = authReducer(undefined, {});
      expect(result).toEqual({});
    });

    test('should add the user to the state', () => {
      const loadAuthLoginAction = {
        type: actionTypes.LOGIN_USER_GOOGLE,
        user: 'user',
      };

      const result = authReducer(initialState, loadAuthLoginAction);
      expect(result).toEqual({ user: 'user' });
    });

    test('should add the errorUser to the state', () => {
      const loadAuthLoginErrorAction = {
        type: actionTypes.LOGIN_USER_GOOGLE_ERROR,
        loginError: undefined,
      };

      const result = authReducer(initialState, loadAuthLoginErrorAction);
      expect(result).toEqual({ loginError: undefined });
    });
  });
});
