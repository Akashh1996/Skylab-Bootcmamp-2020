import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  withRouter,
  Link,
} from 'react-router-dom';

import {
  AppBar, Toolbar, Typography, Button, makeStyles, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { signOutUser } from '../../redux/actions/user-actions';

import './Header.css';

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

function Header(props) {
  const classes = useStyle();

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUser());
    props.history.push('/login');
  };

  const active = useSelector((store) => store.user.active);

  return (
    <header className="header">
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            id="test-btn"
            color="inherit"
            arial-label="menu"
            className={classes.menuButton}
            onClick={() => props.openAction()}
          >
            <MenuIcon />
          </IconButton>
          <IconButton className="logo-btn" color="inherit">
            <Link to="/" exact>
              <div>
                <img src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd4196bb5e92529d09cb2/f2a20b3bfeda6b6a60366509c71cefdb/Logo-colores.png" height="75px" width="200px" alt="logo" />
              </div>
            </Link>
          </IconButton>

          <Typography variant="h1" color="initial" className={classes.title} />
          <div className="header-btn">

            {
            active ? (
              <>
                <Button color="primary">
                  <Link to="/admin" className="text-link">ADMIN</Link>
                </Button>
                <Button color="primary">
                  <Link id="signOut" to="/login" className="text-link" onClick={() => signOut()}>SIGN OUT</Link>
                </Button>
                <Button className="only-btn" variant="contained" color="secondary">
                  <Link to="/create" className="text-link">CREAR RETO</Link>
                </Button>
              </>
            ) : (
              <Button className="only-btn" color="primary">
                <Link to="/login" className="text-link">LOG IN</Link>
              </Button>
            )
          }
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default withRouter(Header);
