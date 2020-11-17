import actionTypes from '../actions/actionTypes'

export default function bikeReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_COMPONENTS:
            // return lo que sea
            const compoState =  {...state, componentList: action.componentList}
            return compoState;
            debugger;
            break;
        case actionTypes.LOAD_COMPONENTS_ERROR:
            // return lo que sea
            const compoStateError = {...state, error: action.error}
            debugger;
            return compoStateError;
            break;
        case actionTypes.LOAD_SINGLE_COMPONENT:
            // return lo que sea
            const singleCompoState =  {...state, componentItem: action.componentItem}
            return singleCompoState;
            debugger;
            break;

        case actionTypes.LOAD_SHOPPING_CART:
            // return lo que sea
            const cartCompoState = {...state, componentCart: action.componentCart}
            return cartCompoState;

        case actionTypes.ADD_TO_CART:
            const addToCartState = {...state, componentAddCart: action.componentAddCart}
            return addToCartState;
    
        default:
            return state;
    }
}