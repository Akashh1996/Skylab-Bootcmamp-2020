import actionTypes from '../actions/actionTypes';

export default function listReducer(state = {}, action) {
    switch (action.type) {
        
        case actionTypes.LOAD_LIST:
            
            return {...state, list: action.list};
        case actionTypes.LOAD_LIST_ERROR:
            return {...state, error: action.error};
        case actionTypes.CREATE_PROJECT:

            return {...state, info: action.newProject};
        case actionTypes.DELETE_PROJECT:
            debugger;
            const newList=state.list.filter(item=>item._id !== action.listItem.projects._id)
            debugger;
            return{...state, list:newList}

        
        case actionTypes.LOAD_PROJECT_DETAIL:
            return {...state, projectDetail: action.projectDetail}

    
        default:
            return state;
    }
}

