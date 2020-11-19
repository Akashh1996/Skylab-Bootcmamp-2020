import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function UserList({ userList }) {
  return (
    <main>
      <h1>User List</h1>
      <ul>
        {userList && userList.length && userList.map((user) => (
          <li>
            <span>{user.name}</span>
            <span>{user.age}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    userList: state.userReducer,
  };
}

export default connect(mapStateToProps)(UserList);
