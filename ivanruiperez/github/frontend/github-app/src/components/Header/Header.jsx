/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/projectActions';
// eslint-disable-next-line react/prop-types
function Header({ dispatch }) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <a className="navbar-brand" href="#">GITHUB PROJECTS</a>
      <div id="navb" className="navbar-collapse collapse hide">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="fas fa-user" />
              {' '}
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <button id="login" type="button" onClick={() => dispatch(loginUser())}>
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
function mapStateToProps({ projectReducer }) {
  return {
    loginUser: projectReducer.login,
  };
}
export default connect(mapStateToProps)(Header);
