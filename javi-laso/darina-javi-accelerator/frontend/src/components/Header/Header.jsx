import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { githubLogin } from '../../redux/actions/project-actions';
import './Header.css';

function Header({ dispatch }) {
  return (
    <>
      <header className="jumbotron">
        <h1>Header</h1>
        <button type="button" onClick={() => { dispatch(githubLogin()); }}>Github Login</button>
      </header>
    </>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Header);
