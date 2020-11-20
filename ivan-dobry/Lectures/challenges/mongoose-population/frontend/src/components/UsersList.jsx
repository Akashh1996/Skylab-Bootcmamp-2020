/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { requestUsers } from '../redux/actions/usersActions';

function UsersList({ usersList, dispatch }) {
  debugger;
  if (!usersList && !usersList?.length) {
    dispatch(requestUsers());
  }
  return (

    <>
      <section className="users__section" />
      <h1>Users List!</h1>
      <Card
        data-testid="card"
        className="m-3 product__card"
        style={{ width: '50vw' }}
      >
        {usersList?.map((element) => (
          <>
            <p key="element.name">{element.name}</p>
            <p key="element.age">{element.age}</p>
            <p key="element.adress.street">{element.adress.street}</p>
          </>
        ))}

      </Card>
      <section />
    </>
  );
}

function mapStateToProps({ usersReducers }) {
  debugger;
  return {
    usersList: usersReducers.usersArray,
  };
}

export default connect(mapStateToProps)(UsersList);
