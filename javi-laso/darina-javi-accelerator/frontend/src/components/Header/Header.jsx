import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { githubLogin } from '../../redux/actions/project-actions';
import './Header.css';

function Header({ dispatch }) {
  return (
    <>
      <header className="jumbotron">
        <button type="button" onClick={() => { dispatch(githubLogin()); }}>Github Login</button>
        <Link to="/newProjectForm" style={{ textDecoration: 'none' }}>
          <div className="create-project">Create Project</div>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="home">Home</div>
        </Link>

      </header>
    </>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Header);
