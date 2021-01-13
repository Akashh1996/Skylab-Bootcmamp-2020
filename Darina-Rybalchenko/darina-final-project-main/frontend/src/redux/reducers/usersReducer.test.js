import usersReducer from './usersReducer';
import actionTypes from '../actions/actionTypes';

describe('reducers', () => {
  let initialState;
  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  describe('usersReducer', () => {
    test('should return the initial state without action', () => {
      const result = usersReducer(undefined, {});
      expect(result).toEqual({});
    });

    test('should add the user to the state', () => {
      const loadAuthLoginAction = {
        type: actionTypes.AUTH_LOGIN,
        user: 'user',
      };

      const result = usersReducer(initialState, loadAuthLoginAction);
      expect(result).toEqual({ user: 'user', isLogged: true });
    });

    test('should add the errorUser to the state', () => {
      const loadAuthLoginErrorAction = {
        type: actionTypes.AUTH_LOGIN_ERROR,
        userError: 'error',
      };

      const result = usersReducer(initialState, loadAuthLoginErrorAction);
      expect(result).toEqual({ errorUser: 'error' });
    });

    test('should add the user null and isLogged to false', () => {
      const loadAuthSignOutAction = {
        type: actionTypes.AUTH_SIGNOUT,

      };

      const result = usersReducer(initialState, loadAuthSignOutAction);
      expect(result).toEqual({ user: null, isLogged: false });
    });

    test('should add the errorUser to the state', () => {
      const loadAuthSigOutErrorAction = {
        type: actionTypes.AUTH_SIGNOUT_ERROR,
        userError: 'error',
      };

      const result = usersReducer(initialState, loadAuthSigOutErrorAction);
      expect(result).toEqual({ errorUser: 'error' });
    });

    test('should add the user to the state', () => {
      const saveUserAction = {
        type: actionTypes.SAVE_USER,
        user: 'user',
      };

      const result = usersReducer(initialState, saveUserAction);
      expect(result).toEqual({ user: 'user', isLogged: true });
    });

    test('should add the created booking to the state', () => {
      const loadCreatedBookingAction = {
        type: actionTypes.CREATE_BOOKING,
        user: 'user',
      };

      const result = usersReducer(initialState, loadCreatedBookingAction);
      expect(result).toEqual({ user: 'user' });
    });

    test('should add the errorUser to the state', () => {
      const loadCreatedBookingErrorAction = {
        type: actionTypes.CREATE_BOOKING_ERROR,
        userError: 'error',
      };

      const result = usersReducer(initialState, loadCreatedBookingErrorAction);
      expect(result).toEqual({ errorUser: 'error' });
    });

    test('should add user to the state', () => {
      const loadAddUserAction = {
        type: actionTypes.ADD_USER,
        user: 'user',
      };

      const result = usersReducer(initialState, loadAddUserAction);
      expect(result).toEqual({ user: 'user', isLogged: false });
    });

    test('should add the errorUser to the state', () => {
      const loadAddUserErrorAction = {
        type: actionTypes.ADD_USER_ERROR,
        userError: 'error',
      };

      const result = usersReducer(initialState, loadAddUserErrorAction);
      expect(result).toEqual({ errorUser: 'error' });
    });

    test('should add user to the state', () => {
      const loadFetchUserAction = {
        type: actionTypes.FETCH_USER,
        user: 'user',
      };

      const result = usersReducer(initialState, loadFetchUserAction);
      expect(result).toEqual({ user: 'user' });
    });

    test('should add the errorUser to the state', () => {
      const loadFetchUserErrorAction = {
        type: actionTypes.FETCH_USER_ERROR,
        userError: 'error',
      };

      const result = usersReducer(initialState, loadFetchUserErrorAction);
      expect(result).toEqual({ errorUser: 'error' });
    });
  });
});
