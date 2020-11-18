import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.LOAD_LIST:
            const caseSuccess = {...state, listArray: action.taskList};
            debugger;
            return caseSuccess;
        case actionTypes.LOAD_LIST_ERROR:
            const caseError = {...state, error: action.error};
            return caseError;

    
        default:
            return state;
    }
}