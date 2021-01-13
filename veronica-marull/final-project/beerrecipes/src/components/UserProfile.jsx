import React from 'react';
import './userProfile.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function UserProfile ({ user }) {
  return (
    <>
    {user &&
     <div className="profile">
        <div className="photo">
        <img src={user.additionalUserInfo.profile.picture} className="user-image" alt="user-image" />
        </div>
        <div className="user-name">
         <h2>{user.user.displayName}</h2>
        </div>
        <div className="user-email">
            {user.user.email}
        </div>
    </div> }

    </>

  );
}

UserProfile.propTypes = {
  user: PropTypes.object

};

function mapStateToProps ({ authReducer }) {
  return {
    user: authReducer.user
  };
}

export default connect(mapStateToProps)(UserProfile);
