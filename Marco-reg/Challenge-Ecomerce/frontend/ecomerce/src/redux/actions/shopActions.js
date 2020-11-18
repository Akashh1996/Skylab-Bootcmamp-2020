import actionTypes from './actionTypes';
import axios from 'axios';
function requestProductsSuccess(productList) {
    
    return {
        type: actionTypes.LOAD_PRODUCTS,
        productList
    };
}
function requestProductsError(error) {
    return {
        type: actionTypes.LOAD_PRODUCTS_ERROR,
        error
    };
}
export function requestProducts() {
    return async (dispatch) => {
        debugger
        const endpoint = 'http://localhost:3020/products';
        try {
            const products = await axios.get(endpoint)
            debugger
            dispatch(requestProductsSuccess(products.data));
        } catch (error) {
            dispatch(requestProductsError(error));
        }
    };
}
function requestProductDetailSuccess(productDetail) {
    return {
        type: actionTypes.LOAD_PRODUCT_DETAIL,
        productDetail
    }
}
function requestProductDetailError(error) {
    return {
        type: actionTypes.LOAD_PRODUCT_DETAIL_ERROR,
        error
    };
}
export function requestProductDetail(productId) {
   
    return async (dispatch) => {
        const endpoint = `http://localhost:3020/products/${productId}`;
        try {
            const product = await axios.get(endpoint)
          
            dispatch(requestProductDetailSuccess(product.data));
        } catch (error) {
            dispatch(requestProductDetailError(error));
        }
    };
}
export function cleanProductDetail() {
    return {
        type: actionTypes.CLEAN_PRODUCT_DETAIL,
    }
}