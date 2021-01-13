/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { loginUserWithGoogle, signoutUser } from '../../redux/actions/authAction';

function Header({ user, dispatch }) {
  function handleLogoutClick() {
    dispatch(signoutUser());
  }
  function handleLoginClick() {
    dispatch(loginUserWithGoogle());
  }

  return (
    <header id="info-header">
      <div id="log-box">

        <Link to="/">
          <img
            src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd46936d1b43c58e6acd5/667daae8ab79997e2a5ae5cf37bd385a/logo_size_invert.jpg"
            id="logo-spot"
            alt="logo"
          />
        </Link>

      </div>
      <div id="buttons-link">

        <div id="home-link">
          <Link to="/" id="homie">
            <p id="homie">home</p>
          </Link>

        </div>
        { user && user._id && (
        <div id="home-link">
          <Link to={`/user/${user._id}`} id="homie">
            <p id="homie">Profile</p>
          </Link>

        </div>
        )}
        <div id="home-link">
          <Link to="/spots/" id="homie">
            <p id="homie">Spots</p>
          </Link>

        </div>
        <div id="home-link">
          <Link to="/create/" id="homie">
            <p id="homie">Create</p>
          </Link>

        </div>
        <div id="home-link">

          <Link to="/" id="homie">
            {!user ? <p id="login" onClick={handleLoginClick}>Login</p> : <p id="login" onClick={handleLogoutClick}>Logout</p>}

          </Link>

        </div>
      </div>

    </header>

  );
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
  };
}
export default connect(mapStateToProps)(Header);
