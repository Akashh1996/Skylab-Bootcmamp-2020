import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import
requestUsersList
  from '../actions/usersAction';

function Users({ usersList, dispatch }) {
  useEffect(() => {
    if (!usersList || usersList?.length === 0) {
      dispatch(requestUsersList());
    }
  }, [usersList?.length]);

  return (
    <div className="list-container">
      {(!usersList || !usersList.length) && <h1>There is no list!</h1>}
      {usersList && usersList.length > 0 && usersList.map((item) => (
        <>
          <div>
            <ol>
              <li>USER - INFO</li>
              <ul>
                <li>{`Name: ${item.name}`}</li>
                <li>{`Age: ${item.age}`}</li>
                <li>Address:</li>
                <ul>
                  <li>{`Street: ${item.address.street}`}</li>
                  <li>{`Number: ${item.address.number}`}</li>
                  <li>{`City: ${item.address.city}`}</li>
                  <li>Country:</li>
                  <ul>
                    <li>{`Code: ${item.address.country.code}`}</li>
                    <li>{`Name: ${item.address.country.name}`}</li>
                  </ul>
                </ul>
              </ul>
            </ol>
          </div>
        </>
      ))}
    </div>
  );
}

Users.propTypes = {
  usersList: PropTypes.shape([]),
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    requestUsersList: PropTypes.func.isRequired,
  }).isRequired,
};

Users.defaultProps = {
  usersList: null,
};

function mapStateToProps({ usersReducer }) {
  return {
    usersList: usersReducer.usersList,
  };
}

export default connect(mapStateToProps)(Users);
