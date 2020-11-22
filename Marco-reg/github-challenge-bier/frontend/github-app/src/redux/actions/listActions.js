import actionTypes from './actionTypes';
import axios from 'axios';


const URL = 'http://localhost:3020';

function requestListSuccess(list) {
    return {
        type: actionTypes.LOAD_LIST,
        list
    }
}

function requestDeleteSucces(listItem){
    return{
        type:actionTypes.DELETE_PROJECT,listItem
    }
}

function requestListError(error) {
    return{
        type: actionTypes.LOAD_LIST_ERROR,
        error
    }
}
function requestCreateSuccess(list){
    return {
        type:actionTypes.CREATE_PROJECT,
        list
    }
}

export function requestList() {
    return async (dispatch) => {
        const list = await axios.get(URL);
        try {
            
            dispatch(requestListSuccess(list.data))
            console.log('getting list data')
            
        } catch (error) {
            dispatch(requestListError(error))
        }
    }

}



export function createProjectError(error){
    return {
        type:actionTypes.CREATE_PROJECT_ERROR,
        error,
    }
}

export function createProject(list){
    return async (dispatch)=>{
        try {
            await axios.put(URL, list);
            dispatch(requestCreateSuccess(list));

        } catch (error) {
            dispatch(createProjectError(error));
            
        }
    }
}
export function deleteProject(listItem){
    
    return async (dispatch)=>{
        try {
            await axios.delete(URL,listItem);
            dispatch(requestDeleteSucces(listItem));
        } catch (error) {
            dispatch(deleteProjectError(error))
            
        }
    }
}

function deleteProjectError(error){
    return {
        type:actionTypes.DELETE_PROJECT_ERROR,error
    }
}