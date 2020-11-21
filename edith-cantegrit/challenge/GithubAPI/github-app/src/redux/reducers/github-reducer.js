import actionTypes from '../actions/action-types';

export default function githubReducer(state={}, action) {
    switch(action.type) {
        case actionTypes.LOAD_GITHUB_LIST:
            const loading = {...state, gitHubList: action.gitHubList};
            return loading;
        case actionTypes.LIST_ERROR: 
            const loadError = {...state, error: action.errorList};
            return loadError
        default:
            return state;
    }
}


