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
    <main className="p-4">
      <h1>User List</h1>
      <ul>
        {userList && userList.length && userList.map((user) => (
          <li key={performance.now * Math.random()} className="d-flex flex-column mb-5">
            <span className="mr-2">{`Name: ${user.name}`}</span>
            <span>{`Age: ${user.age}`}</span>
            <span>{`Address: ${user.address.street} ${user.address.number}, ${user.address.city}, ${user.address.country.name}`}</span>
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
