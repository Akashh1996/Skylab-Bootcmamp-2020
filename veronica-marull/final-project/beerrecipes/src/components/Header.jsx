import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { loginUserWithGoogle, logoutGoogleSuccess } from '../../src/redux/actions/auth-actions';
import PropTypes from 'prop-types';

const logo = 'https://trello-attachments.s3.amazonaws.com/5fc10850bf7d3e14ea9db78b/300x101/08301d94f2a531a81600587e9c48aa91/logobeer.png';

function Header ({ user, dispatch, beersList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLoginClick () {
    dispatch(loginUserWithGoogle());
  }

  function handleLogoutClick () {
    dispatch(logoutGoogleSuccess());
  }

  return (
    <>
        <div className="container">
        <a name="top"></a>
            <div className="header_mobile">
                <div className="logo-mobile">
                    <img src={logo} alt="logo-mobile-image" id="logo" />
                </div>
                <div className="login-burger">
                    <span className="material-icons" id="burger_menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>menu</span>
                    {!user
                      ? <span className="material-icons" id="login-mobile" onClick={handleLoginClick}>account_circle</span>
                      : <>
                      <Link to={'/profile'}><img src={user.additionalUserInfo.profile.picture} alt="userPhoto" className="user-photo"/></Link>
                      </>
                    }
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}><Link to={'/'}><span className="links">HOME</span></Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={'/beers/'}><span className="links">BEERS</span></Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={'/beers/about'}><span className="links">ABOUT</span></Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={'/beers/contact'}><span className="links">CONTACT</span></Link></MenuItem>
                        {user &&
                        <MenuItem onClick={handleClose}><span className="links" onClick = {handleLogoutClick}>LOG OUT</span></MenuItem>

                    }
                    </Menu>
                </div>
            </div>

            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo-image" id="logo" />
                </div>

                <div id="home"><b><Link to={'/'}>HOME</Link></b></div>
                <div id="beers"><b><Link to={'/beers/'}>BEERS</Link></b></div>
                <div id="about"><b><Link to={'/beers/about'}>ABOUT</Link></b></div>
                <div id="contact"><b><Link to={'/beers/contact'}>CONTACT</Link></b></div>
                <div className="login-logout">
                  {!user
                    ? <button className="login-logout-btn btn" id="login" onClick = {handleLoginClick}><b>Log In</b></button>
                    : <>
                    <span className="userName"><Link to={'/profile'}>{user.user.displayName}</Link></span>
                    <button className="login-logout-btn btn" id="logout" onClick = {handleLogoutClick}><b>Log Out</b></button>
                    </>
                    }

                </div>
            </div>
    </div>
    </>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  beersList: PropTypes.array
};

function mapStateToProps ({ authReducer }) {
  return {
    user: authReducer.user
  };
}
export default connect(mapStateToProps)(Header);
