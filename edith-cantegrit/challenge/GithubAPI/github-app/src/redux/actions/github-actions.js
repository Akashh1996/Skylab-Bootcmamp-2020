import axios from 'axios';
import actionTypes from './action-types';

const token = process.env.TOKEN_GITHUB;

function requestLoadGitHubSuccess(gitHubList) {
    return {
        type: actionTypes.LOAD_GITHUB_LIST,
        gitHubList
    }
}

function requestLoadGitHubError(errorList) {
    return {
        type: actionTypes.LIST_ERROR,
        errorList
    }
}

export function requestLoadGitHub() {
    return async (dispatch) => {
    const endpoint = `https://api.github.com/users/defunkt`;
    try {
        const gitHubList = await axios({
            method: 'get', 
            url: endpoint,
            headers: {
              Authorization: 'token ' + token
            }
        })
        dispatch(requestLoadGitHubSuccess(gitHubList.data))
    }
    catch(error) {
        dispatch(requestLoadGitHubError(error))
    };
}   
}

// CHANGE IN AXIOS URL

// LLAMADA A MIS REPOS
//"https://api.github.com/users/alma-co/repos?type=owner"

// LLAMADA A ORGANIZACION:
// https://api.github.com/orgs/octo-org/repos

// PROFILE SETTINGS
// https://api.github.com/users/alma-co

// export function createGitHubRepo() {
//     return async (dispatch) => {
//     const endpoint = `https://api.github.com/user/repos`;
//     try {
//         const gitHubRepo = await axios({
//             method: 'post', 
//             url: endpoint,
//             data: { 
//                 "name": "blog",
//                 "auto_init": true,
//                 "private": true,
//                 "gitignore_template": "nanoc"
//               },
//             headers: {
//               Authorization: 'token ' + token
//             }
//         })
//         dispatch(createGitHubRepoSuccess(gitHubRepo.data))
//     }
//     catch(error) {
//         dispatch(createGitHubRepoError(error))
//     };
// }   
// }
