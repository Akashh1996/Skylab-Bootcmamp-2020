import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestUsers } from '../../redux/actions/userAction';

import './UserList.css';


function UserList({ userList, dispatch}) {
    
    if (!userList || userList.length <= 0) {
        dispatch(requestUsers());
    }
    
    console.log(userList)
    return (
        <div className = "list-wrapper">
            {userList &&
                userList.length >= 1 &&
                userList.map((user) => <div className="user_wrapper" key = {user.id}>
                <span>{user["user-name"]}</span>
                </div>
                )}
        </div>
    );
}
function mapStateToProps(state) {
   debugger
    return {
        userList: state.userReducer.userList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);


