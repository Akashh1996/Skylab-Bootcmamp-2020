import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadUsers } from '../../redux/actions/actions';

function UserList({ userList, dispatch }) {
  useEffect(() => {
    if (!userList || userList.length === 0) {
      dispatch(loadUsers());
    }
  }, []);

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {userList && userList.length && userList.map((user) => (
          <li key={performance.now * Math.random()}>
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
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userList: state.userReducer,
  };
}

export default connect(mapStateToProps)(UserList);
