import actionTypes from './actionTypes';
import axios from 'axios';
function requestProductsSuccess(productList) {
    return {
        type: actionTypes.LOAD_PRODUCTS,
        productList
    };
}
function requestProductsError(error) {
    debugger
    return {
        type: actionTypes.LOAD_PRODUCTS_ERROR,
        error
    };
}
export function requestProducts() {
    return async (dispatch) => {

        const endpoint = 'http://localhost:2319/products';
        try {
            const products = await axios.get(endpoint);
            debugger
            dispatch(requestProductsSuccess(products.data));
        } catch (error) {
            console.log(error)
            debugger
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
export function requestProductDetail(id) {
    return async (dispatch) => {
        const endpoint = `http://localhost:2319/products/${id}`;
        debugger
        try {
            const product = await axios.get(endpoint, {
                params: {
                    productId: id
                }
            })   
            dispatch(requestProductDetailSuccess(product.data));
        } catch (error) {
            dispatch(requestProductDetailError(error));
        }
    };
}