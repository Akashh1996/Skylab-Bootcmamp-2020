import actionTypes from './actionTypes';
import axios from 'axios';
function requestUsersSuccess(usersList) {
    return {
        type: actionTypes.LOAD_USERS,
        usersList
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
