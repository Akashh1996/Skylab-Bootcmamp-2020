import actionTypes from '../actions/actionTypes';
export default function productReducer(state = [], action) {
    debugger
    switch (action.type) {
        case actionTypes.LOAD_PRODUCTS:
            return [ action.productList ];
        case actionTypes.LOAD_PRODUCTS_ERROR:
            // eslint-disable-next-line no-unused-vars
            const err = { ...state, error: action.error };
            return { ...state, error: action.error };
        case actionTypes.LOAD_PRODUCT_DETAIL:
        const detail = {...state, productDetail: action.productDetail  }
        debugger;
        return detail
        default:
            return state;
    }
}