import actionTypes from './actionTypes';
import axios from 'axios';

const endpoint = 'http://localhost:5050/user';
function requestUsersSuccess(userList) {
    debugger;
    return {
        type: actionTypes.LOAD_USERS,
        userList
    };
}
function requestUsersError(error) {
    
    return {
        type: actionTypes.LOAD_USERS_ERROR,
        error
    };
}
export function requestUsers() {
    return async (dispatch) => {
        debugger;
        
        try {
            const users = await axios.get(endpoint);
            
            dispatch(requestUsersSuccess(users.data));
        } catch (error) {
            console.log(error)
           
            dispatch(requestUsersError(error));
        }
    };
}

export function createUserSuccess(newUser) {
    return {
      type: actionTypes.CREATE_USER,
      newUser,
    };
  }
  
  export function createUserError(error) {
    return {
      type: actionTypes.CREATE_USER_ERROR,
      error,
    };
  }
  
  export function createUser(info) {
    return async (dispatch) => {
      // eslint-disable-next-line no-debugger
      debugger;
      try {
        const user = await axios.put(endpoint, { info });
  
        dispatch(createUserSuccess(user.data));
      } catch (error) {
        dispatch(createUserError(error));
      }
    };
  }
