/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BurgerButton from './BurgerButton';
import Login from './Login';

function Header({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const path = {
    pilates: '5fc375634cd4ba142ae806ec',
    stretching: '5fc37472da17ed08fdae08c3',
    yoga: '5fc3ea0d7096975798ab13b9',
  };

  return (

    <header className="header">
      <BurgerButton />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div>
          <img
            className="header__logo"
            src="https://trello-attachments.s3.amazonaws.com/5fc0f7845fca4370bc8c6bca/5fc42c268a13fa2e375e47c5/ff411b0bcf88deb3885024870d73b989/Daria.wix-2.png"
            alt=""
          />
        </div>
      </Link>

      <div className="link-wrapper">
        <div>
          <Link
            className="link"
            to="/"
          >
            <p className="link__text">HOME</p>
          </Link>
        </div>

        <div>
          <Button className="link__classes" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Classes
            <span>
              {' '}
              <ArrowDropDownIcon />
            </span>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link
              className="link"
              to={`/workouts/${path.stretching}`}
            >
              {' '}
              <MenuItem onClick={handleClose}>Stretching</MenuItem>
            </Link>
            <Link
              className="link"
              to={`/workouts/${path.pilates}`}
            >
              {' '}
              <MenuItem onClick={handleClose}>Pilates</MenuItem>
            </Link>
            <Link
              className="link"
              to={`/workouts/${path.yoga}`}
            >
              {' '}
              <MenuItem onClick={handleClose}>Yoga</MenuItem>
            </Link>
          </Menu>
        </div>

        <div>
          <Link
            className="link"
            to="/aboutMe"
          >
            <p className="link__text">ABOUT DARIA</p>
          </Link>
        </div>

        <div className="header__link-book">
          {user
            ? (
              <Link
                className="link"
                to={`/users/${user._id}`}
              >
                <p className="link__text">MY ACCOUNT</p>
              </Link>
            )
            : null}

        </div>

      </div>
      <div className="flex-spacer" />

      <Login />
    </header>

  );
}
function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
    isLogged: state.usersReducer.isLogged,
  };
}
export default connect(mapStateToProps)(Header);
