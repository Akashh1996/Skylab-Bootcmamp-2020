import actionTypes from './actionTypes';
import axios from 'axios';

const URL = 'http://localhost:3020';

function requestListSuccess(list) {
    return {
        type: actionTypes.LOAD_LIST,
        list
    }
}

function requestListError(error) {
    return{
        type: actionTypes.LOAD_LIST_ERROR,
        error
    }
}

export function requestList() {
    return async (dispatch) => {
        const {list} = await axios.get(URL);
        try {
            dispatch(requestListSuccess(list))
            
        } catch (error) {
            dispatch(requestListError(error))
        }
    }
}