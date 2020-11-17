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

function requestSingleComponentSuccess(componentItem) {
    return {
        type: actionTypes.LOAD_SINGLE_COMPONENT,
        componentItem
    }
}

function requestSingleComponentError(error) {
    return {
        type: actionTypes.LOAD_SINGLE_COMPONENT_ERROR,
        error
    }
}

function requestCartSuccess(componentCart) {
    return {
        type: actionTypes.LOAD_SHOPPING_CART,
        componentCart
    }
}

function requestCartError(error) {
    return {
        type: actionTypes.LOAD_SHOPPING_CART,
        error
    }
}

function addToCartSuccess(componentAddCart) {
    return {
        type: actionTypes.ADD_TO_CART,
        componentAddCart
    }
}
function addToCartError(error) {
    return {
        type: actionTypes.ADD_TO_CART_ERROR,
        error
    }
}

export function requestComponents(){
    debugger;
    return async (dispatch) => {
        const endpoint = 'http://localhost:5000/components';

        try {
            const components = await axios.get(endpoint);
            // dispatch una acción "sincrona"
            debugger
            dispatch(requestComponentsSuccess(components.data)); 
        } catch (error) {
            debugger
            // Dispatchamos una accion "sincrona" de error
            dispatch(requestComponentsError(error));
        }
    }
}

export function requestSingleComponent(itemId){
    debugger;
    return async (dispatch) => {
        const endpoint = `http://localhost:5000/components/${itemId}`;

        try {
            const component = await axios.get(endpoint);
            debugger;
            dispatch(requestSingleComponentSuccess(component.data))
        } catch (error) {
            debugger
            // Dispatchamos una accion "sincrona" de error
            dispatch(requestSingleComponentError(error));
        }
    }
}

export function addToCart(itemId) {
    debugger;
    const endpoint = `http://localhost:5000/components/${itemId}`;
    return async (dispatch) => {
        try {
            // MODIFICAR
            const component = await axios.post(endpoint);
            debugger;
            dispatch(addToCartSuccess(component.data))
        } catch (error) {
            dispatch(addToCartError(error))
        }
    }
}

export function requestCart(){
    debugger;
    return async (dispatch) => {
    const endpoint = `http://localhost:5000/cart/items`;

        try {
            const component = await axios.get(endpoint);
            debugger;
            dispatch(requestCartSuccess(component.data[0]['shopping-cart']))
        } catch (error) {
            debugger;
            dispatch(requestCartError(error))
        }
    }
}