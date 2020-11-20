import axios from 'axios';
import actionTypes from './action-types';

function addUserSuccess(userInfo) {
    return {
    type: actionTypes.LOAD_USER,
    userInfo
    }
}

function agendaListSuccess(agendaList) {
    return {
        type: actionTypes.LOAD_AGENDA_LIST,
        agendaList
    }

}

function agendaListError(errorList) {
    return {
        type: actionTypes.LIST_ERROR,
        errorList
    }
}

export function requestLoadAgendaList() {
    return async(dispatch) => {
    const endpointList = 'http://localhost:5000/users/';
        try {
            const list = await axios.get(endpointList); 
            dispatch(agendaListSuccess(list.data)) 
        } catch(error){
            dispatch(agendaListError(error))
        } 
    }
}

export function enterUserInAgendaList(infoContact) {
    return async(dispatch) => {
    const endpointItem = `http://localhost:5000/users/`;
        try {
            const addUser = await axios.put(endpointItem, infoContact);
            dispatch(addUserSuccess(addUser.data))
        } catch(error) {
            dispatch(error)
        } 
    }
}
