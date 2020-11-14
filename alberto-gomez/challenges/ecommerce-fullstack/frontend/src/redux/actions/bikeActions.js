import actionTypes from './actionTypes';
import axios from 'axios';

function requestComponentsSuccess(componentList) {
    return {
        type: actionTypes.LOAD_COMPONENTS,
        componentList
    }
}

function requestComponentsError(error) {
    return {
        type: actionTypes.LOAD_COMPONENTS_ERROR,
        error
    }
}

export function requestComponents(){
    debugger
    return (dispatch) => { // al estar el json en local, la función no es asíncrona
        const endpoint = '../../api/products.json';

        try {
            const components = axios.get(endpoint);
            // dispatch una acción "sincrona"
            debugger
            dispatch(requestComponentsSuccess(components.data));
            return 
        } catch (error) {
            debugger
            // Dispatchamos una accion "sincrona" de error
            dispatch(requestComponentsError(error));
        }


    }
}