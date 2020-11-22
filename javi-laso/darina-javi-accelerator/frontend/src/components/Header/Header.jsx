import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { githubLogin } from '../../redux/actions/project-actions';
import './Header.css';

function Header({ dispatch }) {
  return (
    <>
      <header className="header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-name">SkyLab Accelerator</div>
        </Link>
        <div className="flex-spacer" />
        <Link to="/newProjectForm" style={{ textDecoration: 'none' }}>
          <div className="create-project">Create Project</div>
        </Link>
        <button type="button" onClick={() => { dispatch(githubLogin()); }}>Github Login</button>

      </header>
    </>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Header);
