/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../../redux/actions/user-actions';
import './LoginScreen.css';

function LoginScreen(props) {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.user.loading);
  const active = useSelector((store) => store.user.active);

  useEffect(() => {
    if (active) {
      props.history.push('/');
    }
  }, [active]);

  return (

    <div className="login-page">
      <div className="sign-container">
        <div className="text-center">
          <h2>Registro de usuarios</h2>
          <hr />
          <div className="logo-image">
            <img src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd4196bb5e92529d09cb2/01e5a87cf40d898b0c0d9a9db60dc145/color_logo_transparent_vertical2.png" alt="logo" />
          </div>
          <button
            className="google-btn btn btn-dark"
            type="button"
            onClick={() => dispatch(userRegister())}
            disabled={loading}
          >
            Acceder con Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginScreen);
