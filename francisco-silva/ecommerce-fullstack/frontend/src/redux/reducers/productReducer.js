import actionTypes from '../actions/actionTypes';
export default function productReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.LOAD_PRODUCTS:
            const list = {...state, productList: action.productList};
            return list;
        case actionTypes.LOAD_PRODUCTS_ERROR:
            // eslint-disable-next-line no-unused-vars
            const err = { ...state, error: action.error };
            return err;
        case actionTypes.LOAD_PRODUCT_DETAIL:
            const detail = { ...state, productDetail: action.productDetail }
            return detail
        default:
            return state;
    }
}