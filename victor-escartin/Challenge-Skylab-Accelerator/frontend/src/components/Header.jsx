/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../redux/actions/userActions';
import '../styles/Header.css';

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (

    <div className="header-container">
      <div>
        <Link className="brand" to="/">
          Skylab Coders Market
        </Link>
      </div>
      <div>
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              {userInfo.name}
              {' '}
              <i className="fa fa-caret-down" />
              {' '}
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="sign" to="/signin">Sign In</Link>
        )}
        {userInfo && userInfo.isAdmin && (
          <div className="dropdown">
            <Link to="#admin">
              Admin
              {' '}
              <i className="fa fa-caret-down" />
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/productlist">Products</Link>
              </li>
              <li>
                <Link to="/orderlist">Orders</Link>
              </li>
              <li>
                <Link to="/userlist">Users</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>

  );
}

export default Header;
