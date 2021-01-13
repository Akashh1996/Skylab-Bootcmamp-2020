import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import './MobileMenu.css';

import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,

  },
  fullList: {
    width: 'auto',

  },
});

export default function MobileMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({

    left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        {['Sobre Mim', 'Eventos', 'Encomendas'].map((text) => (
          <ListItem button key={text}>

            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contactos', 'Faqs'].map((text) => (
          <ListItem button key={text}>

            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="mobile-menu">

      <React.Fragment key="left">
        <Button onClick={toggleDrawer('left', true)}>
          <span className="material-icons">
            menu
          </span>

        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
      <img className="header-logo" src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbce4b8b21fee045a78cb83/999c7ba4091044766dced2dee6afbcb9/Logo_Mariatcha.png" alt="" />
    </div>
  );
}
