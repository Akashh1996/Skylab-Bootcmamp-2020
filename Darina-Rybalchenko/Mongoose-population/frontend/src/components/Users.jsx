/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import requestUsers from '../redux/actions/user-actions';

function Users({ users, actions }) {
  debugger;
  if (!users && !users?.length) {
    actions.requestUsers();
  }
  debugger;
  return (
    <>

      {users && users.length > 0 && users.map((user) => (
        <div key={user._id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </div>
      ))}
    </>
  );
}
function mapStateToProps(state) {
  debugger;
  return {
    users: state.userReducer.users,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestUsers }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
