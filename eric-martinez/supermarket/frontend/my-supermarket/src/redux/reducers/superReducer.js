import actionTypes from '../actions/actionTypes';

export default function superReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_PRODUCTS:
            return {...state, productsList: action.productsList}
        case actionTypes.LOAD_PRODUCTS_ERROR:
            break;
        case actionTypes.LOAD_PRODUCT:
            return {...state, product: action.product}
        case actionTypes.CLEAN_PRODUCT_DETAIL:
            return {...state, product: null}
        case actionTypes.LOAD_BASKET:
            return {...state, basketList: action.basket};
        default:
            return state;
    }
}