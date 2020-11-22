import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import constants from '../../constants/constants';
import { getUserFromGithub, logOutUser } from '../../redux/actions/user-actions';
import './Header.css';

function Header({ dispatch, user }) {
  const code = window.location.search.split('?code=')[1];

  useEffect(() => {
    if (code) {
      dispatch(getUserFromGithub(code));
    }
  }, []);

  useEffect(() => {
    if (user) {
      window.history.replaceState(null, '', window.location.origin);
    }
  }, [user]);

  return (
    <header className="jumbotron">
      {!user && <a href={`${constants.githubLoginUrl}?client_id=${constants.clientId}&redirect_uri=${window.location.origin}${window.location.pathname}&scope=repo`}>Github Login</a>}
      {user && <button type="button" onClick={() => { dispatch(logOutUser()); }}>Logout</button>}
      <Link to="/newProjectForm" style={{ textDecoration: 'none' }}>
        <div className="create-project">Create Project</div>
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="home">Home</div>
      </Link>

    </header>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

Header.defaultProps = {
  user: null,
};

function mapStatetoProps(state) {
  return {
    user: state.usersReducer.user,
    isLogged: state.usersReducer.isLogged,
  };
}

export default connect(mapStatetoProps)(Header);
