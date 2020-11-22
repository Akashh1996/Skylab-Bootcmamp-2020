import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
        <Button
          variant="light"
          as={Link}
          to="/newProjectForm"
        >
          Create Project

        </Button>
        {' '}
        <Button
          variant="dark"
          onClick={() => { dispatch(githubLogin()); }}
        >
          Github Login

        </Button>
        {' '}

      </header>
    </>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Header);
