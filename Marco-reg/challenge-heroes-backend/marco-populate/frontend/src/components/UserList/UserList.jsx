import React, {useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestUsers } from '../../redux/actions/userAction';

import './UserList.css';


function UserList({ userList, dispatch}) {
    useEffect(() => {
        if (!userList || !userList?.length) {
            dispatch(requestUsers());
        }
    }, [userList, dispatch])
    
    
    console.log(userList)
    return (
        <>
        <h1 className="users_title">Users</h1>
        <div className = "list-wrapper">
            
            {userList &&
                userList.length &&
                userList.map((user) => <div className="user_wrapper" key = {user.id}>
                <span className="userName">{user["name"]} </span>
                </div>
                )}
        </div>
        </>
        
    );
}
function mapStateToProps({userReducer}) {
   debugger
    return {
        userList: userReducer.userList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);


