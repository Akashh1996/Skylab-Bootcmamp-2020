import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import
requestUsersList
  from '../actions/usersAction';

function Users({ usersList, dispatch }) {
  useEffect(() => {
    if (!usersList || !usersList?.length) {
      dispatch(requestUsersList());
    }
  }, [usersList?.length]);

  return (
    <div className="list-container">
      {/* <input
        onChange={(event) => setnewItem(event.target.value)}
        value={newItem}
        placeholder="Enter a new item"
      />
      <button type="button" onClick={() => dispatch(requestAddItem(newItem))}>Add</button> */}

      {(!usersList || !usersList.length) && <h1>There is no list!</h1>}

      <ul>
        {usersList && usersList.length > 0 && usersList.map((item) => (
          <>
            <div>
              <h3>User</h3>
              <p>
                <p>{item.name}</p>
                <p>{item.age}</p>
              </p>
              {/* <button value={item.description} type="button"
              onClick={() => dispatch(requestDeleteItem(item))}>x</button> */}
            </div>
          </>
        ))}
      </ul>
    </div>

  );
}

Users.propTypes = {
  usersList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape(() => {}).isRequired,
  actions: PropTypes.shape({
    requestUsersList: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ usersReducer }) {
  return {
    usersList: usersReducer.usersList,
  };
}

export default connect(mapStateToProps)(Users);
