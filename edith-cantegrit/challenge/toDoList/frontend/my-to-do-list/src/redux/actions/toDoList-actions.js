import axios from 'axios';
import actionTypes from './action-types';


function removeItemSuccess(itemDelete) {
    return {
        type: actionTypes.ITEM_DELETE,
        itemDelete
    }
}


function toDoListSuccess(toDoList) {
    return {
        type: actionTypes.LOAD_TO_DO_LIST,
        toDoList
    }

}

function toDoListError(errorList) {
    return {
        type: actionTypes.LIST_ERROR,
        errorList
    }
}

export function requestLoadToDoList() {
    return async(dispatch) => {
    const endpointList = 'http://localhost:5000/todolist/';
        try {
            const list = await axios.get(endpointList); 
            dispatch(toDoListSuccess(list.data)) 
        } catch(error){
            dispatch(toDoListError(error))
        } 
    }
}

export function deleteItemfromToDoList(itemID) {
    return async(dispatch) => {
    const endpointItem = `http://localhost:5000/todolist/${itemID}`;
        try {
            const itemdeleted = await axios.delete(endpointItem);
            dispatch(removeItemSuccess(itemdeleted.data))
        } catch(error) {
            dispatch(error)
        } 
    }
}
