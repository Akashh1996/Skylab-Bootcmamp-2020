import axios from 'axios';
import actionTypes from './actionTypes';

function requestCartSuccess(cartItem) {
    return {
        type: actionTypes.LOAD_CART,
        cartItem,
    };
}

function requestError(error) {
    return {
        type: actionTypes.LOAD_ERROR,
        error,
    }
}

export function requestCart() {
    return async (dispatch) => {
        const endpoint = 'http://localhost:1240/cart';
        try {
            const cart = await axios.get(endpoint);
            dispatch(requestCartSuccess(cart.data));
        } catch (error) {
            dispatch(requestError(error));
        }
    }
}

export function deleteProductFromCart(productName) {
    console.log(`Product name: ${productName}`);
    return async (dispatch) => {
        const endpoint = `http://localhost:1240/cart?productName=${productName}`;
        try {
            const cart = await axios.delete(endpoint, {
                params: {
                    productName,
                }
            });
            dispatch(requestCartSuccess(cart.data));
        } catch (error) {
            dispatch(requestError(error));
        }
    }
}

export function addProductToCart(productName, productColor) {
    return async (dispatch) => {
        const endpoint = `http://localhost:1240/cart?productName=${productName}&productColor=${productColor}`;
        try {
            const cart = await axios.post(endpoint);
            dispatch(requestCartSuccess(cart.data));
        } catch (error) {
            dispatch(requestError(error));
        }
    }
}