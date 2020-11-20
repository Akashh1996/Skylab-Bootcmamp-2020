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
        <section>
        <div className = "list-wrapper">
            
            {userList &&
                userList.length &&
                userList.map((user) => <div className="user_wrapper" key = {user.id}>
                <span className="userName">{user["name"]} </span>
                </div>
                )}
        </div>
        <div className="form-wrapper">
            <form>
                <input className="input" type="text" placeholder="name"/>
                <input className="input" type="text" placeholder="age"/>
                <input className="input" type="text" placeholder="street"/>
                <input className="input" type="text" placeholder="number"/>
                <input className="input" type="text" placeholder="city"/>
                <input className="input" type="text" placeholder="code"/>
                <input className="input" type="text" placeholder="country"/>
                <button>Add!</button>
            </form>
        </div>
        </section>
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


