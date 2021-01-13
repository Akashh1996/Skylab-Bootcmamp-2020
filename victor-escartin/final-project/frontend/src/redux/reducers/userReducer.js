import actionTypes from '../actions/actionTypes';

const initialState = { loading: false, active: false };

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.USERS_REGISTER_REQUEST:
      return { ...state, loading: true };
    case actionTypes.USERS_REGISTER_SUCCESS:
      return {
        ...state, loading: false, user: action.payload, active: true,
      };
    case actionTypes.USERS_REGISTER_FAIL:
      return { ...initialState };
    case actionTypes.SIGN_OUT_SUCCESS:
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default userReducer;
