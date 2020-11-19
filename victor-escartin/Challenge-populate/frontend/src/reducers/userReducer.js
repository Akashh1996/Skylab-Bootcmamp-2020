/* eslint-disable import/prefer-default-export */
const { USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL } = require('../constants/userConstants');

export const userListReducer = (
  state = { loading: true, users: [] },
  action,
) => {
  let valueReturn;
  switch (action.type) {
    case USER_LIST_REQUEST:
      valueReturn = { loading: true };
      break;
    case USER_LIST_SUCCESS:
      valueReturn = { loading: false, users: action.payload };
      break;
    case USER_LIST_FAIL:
      valueReturn = { loading: false, error: action.payload };
      break;
    default:
      valueReturn = state;
      break;
  }
  return valueReturn;
};
