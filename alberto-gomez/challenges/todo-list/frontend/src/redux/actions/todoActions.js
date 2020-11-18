import actionTypes from './actionTypes';
import axios from 'axios';

function loadListSuccess(taskList) {
    return {
        type: actionTypes.LOAD_LIST,
        taskList,
    }
}

function loadListError(error) {
    return {
        type: actionTypes.LOAD_LIST_ERROR,
        error,
    }
}

export function loadList() {
    return async (dispatch) => {
        const endpoint = 'http://localhost:3333/todolist/';
        try {
            const tasks = await axios(endpoint);
            dispatch(loadListSuccess(tasks.data))
        } catch (error) {
            dispatch(loadListError(error))
        }
    }
}