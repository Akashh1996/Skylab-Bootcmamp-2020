import React from 'react';
import PropTypes from 'prop-types';
import './UserLogin.css';

function UserLogin({ props }) {
  const { user, setUser } = props;
  return (
    <div>
      {!user ? (
        <div className="landing__header--user-logged">
          <button type="button" className="login-button" onClick={() => setUser(!user)}>LOG IN</button>
        </div>
      ) : (
        <div className="landing__header--user-nologged">
          <button type="button" className="logout-button" onClick={() => setUser(!user)}>LOG OUT</button>
          <p>{user.name}</p>
          <i className="fa fa-user" />
          {/* <img src={user.profilePic} alt="" /> */}
        </div>
      )}
    </div>
  );
}

UserLogin.propTypes = {
  props: PropTypes.shape({
    user: PropTypes.bool.isRequired,
    setUser: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default UserLogin;
