import actionTypes from './actionTypes';
import axios from 'axios';
function requestUsersSuccess(userList) {
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
        const endpoint = 'http://localhost:5050/user';
        try {
            const users = await axios.get(endpoint);
            
            dispatch(requestUsersSuccess(users.data));
        } catch (error) {
            console.log(error)
           
            dispatch(requestUsersError(error));
        }
    };
}
