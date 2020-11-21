import axios from 'axios';
import actionTypes from './actionsTypes';

const dataBaseUrl = 'http://localhost:5000/';

function requestUserSuccess(users) {
    return {
        type: actionTypes.LOAD_USERS,
        users,
    }
}

function requestUserError(error) {
    return {
        type: actionTypes.LOAD_USERS_ERROR,
        error,
    }
}

export function loadUsers() {
    return async (dispatch) => {
        try {
            const users = await axios.get(dataBaseUrl);
            dispatch(requestUserSuccess(users.data));
        } catch (error) {
            dispatch(requestUserError(error));
        }
    };
};

function createUserSuccess(newUser) {
    return {
        type: actionTypes.CREATE_USER,
        newUser
    }
}


export function createUser(info) {
    return async (dispatch) => {
        try {
            const user = await axios.put(dataBaseUrl,  info )
            dispatch(createUserSuccess(user))
        } catch (error) {
        }
    }
}