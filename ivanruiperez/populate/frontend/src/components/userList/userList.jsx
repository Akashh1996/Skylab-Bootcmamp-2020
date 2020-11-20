import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadUsers } from '../../redux/actions/actions';
import './userList.css';

function UserList({ userList, dispatch }) {
  const userImg = 'https://img.icons8.com/ios/100/000000/user-group-man-man.png';
  useEffect(() => {
    if (!userList || userList.length === 0) {
      dispatch(loadUsers());
    }
  }, []);
  return (
    <>
      <header className="usersHeader"><h4>User List</h4></header>
      <main>
        <div className="searchInputBox">
          <input type="text" placeholder="Find user" className="searchInput" />
          <input type="button" value="Submit" className="buttonInput" />
        </div>
        {userList && userList.length && userList.map((user) => (
          <div className="userBox">
            <div><img src={userImg} alt={userImg} /></div>
            <ul>
              <li>
                Name:
                {' '}
                {user.name}
              </li>
              <li>
                Age:
                {' '}
                {user.age}
              </li>
              <li>
                Address:
                {' '}
                {user.address.street}
                {', '}
                {user.address.number}
              </li>
              <li>
                City, Country:
                {' '}
                {user.address.city}
                {', '}
                {user.address.country.name}
              </li>
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userList: state.usersReducer,
  };
}

export default connect(mapStateToProps)(UserList);
