import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { signInWithGoogle, signOut, fetchUser } from '../../redux/actions/user-actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Login({ dispatch, user }) {
  const userInLocalStorage = JSON.parse(window.localStorage.getItem('user'));
  if (userInLocalStorage && !user) {
    dispatch(fetchUser(userInLocalStorage._id));
  }

  const classes = useStyles();

  const handleLogin = () => {
    dispatch(signInWithGoogle());
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <>

      <div className="link-login">
        {userInLocalStorage
          ? (
            <Link
              id="btn-logout"
              className="link"
              to="/"
              onClick={() => handleLogout()}
            >
              <p className="link-login__text">LOGOUT</p>
            </Link>
          )
          : (
            <Link
              id="btn-login"
              className="link"
              to="/"
              onClick={() => handleLogin()}
            >
              <p className="link__text">LOGIN</p>
            </Link>
          )}

      </div>

      <div className={classes.root}>
        <Avatar alt="" src={userInLocalStorage?.photoURL} />
      </div>
      {' '}

    </>

  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

Login.defaultProps = {
  user: null,
};

function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
    isLogged: state.usersReducer.isLogged,
  };
}

export default connect(mapStateToProps)(Login);
