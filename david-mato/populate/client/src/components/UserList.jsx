import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { Card } from 'react-bootstrap';
import { } from '../redux/actions/userListActions';

function UserList({ userList }) {
  debugger;

  return (
    <>
      <h1 className="title">USER LIST</h1>
      <Card className="m-3">
        {userList && userList.length && userList.map((userListItem) => (
          <div>
            <p key={Date.now() + Math.random()}>
              {`Name: ${userListItem.name}`}
            </p>
            <p key={Date.now() + Math.random()}>
              {`Age: ${userListItem.age}`}
            </p>
            <p key={Date.now() + Math.random()}>
              {`Address: ${userListItem.address.street}, ${userListItem.address.number}, ${userListItem.address.city}, ${userListItem.address.country.name}`}
            </p>
          </div>
        ))}
      </Card>
    </>
  );
}

function mapStateToProps({ userList }) {
  return {
    userList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
  };
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    addTodoListItem: PropTypes.func.isRequired,
    deleteTodoListItem: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
