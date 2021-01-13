import userReducer from './userReducer';
import actionTypes from '../actions/actionTypes';

describe('userReducer', () => {
  test('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({ loading: false, active: false });
  });

  test('should handle USERS_REGISTER_REQUEST', () => {
    expect(
      userReducer({}, {
        type: actionTypes.USERS_REGISTER_REQUEST,
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  test('should handle USERS_REGISTER_SUCCESS', () => {
    expect(
      userReducer({}, {
        type: actionTypes.USERS_REGISTER_SUCCESS,
      }),
    ).toEqual(
      {
        loading: false,
        active: true,
        user: undefined,
      },
    );
  });

  test('should handle USERS_REGISTER_FAIL', () => {
    expect(
      userReducer({ }, {
        type: actionTypes.USERS_REGISTER_FAIL,
      }),
    ).toEqual(
      { loading: false, active: false },
    );
  });

  test('should handle SIGN_OUT_SUCCESS', () => {
    expect(
      userReducer({}, {
        type: actionTypes.SIGN_OUT_SUCCESS,
      }),
    ).toEqual(
      { loading: false, active: false },
    );
  });
});
