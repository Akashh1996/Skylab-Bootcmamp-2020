import actionTypes from '../actions/actionTypes'

export default function bikeReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_COMPONENTS:
            // return lo que sea
            const coso =  {...state, componentList: action.componentList}
            return coso;
            debugger;
            break;
        case actionTypes.LOAD_COMPONENTS_ERROR:
            // return lo que sea
            debugger;
            break;
    
        default:
            return state;
    }
}