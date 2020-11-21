import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {
	requestLoadGitHub,
} from '../redux/actions/github-actions';

function GithubList({GitList, dispatch}) {
    
    useEffect(() => {
        if(!GitList?.length) {
            dispatch(requestLoadGitHub());
        }
    }, [dispatch, GitList?.length])
    console.log(GitList)

return (
    <>
        {/* {GitList && GitList.map((element) => {
            return <p>{element.url}</p>
        })} */}
    </>
)}

function mapStateToProps({githubReducer}) {
    return {
        GitList: githubReducer.gitHubList
    };
}

connect()
export default connect(mapStateToProps)(GithubList)