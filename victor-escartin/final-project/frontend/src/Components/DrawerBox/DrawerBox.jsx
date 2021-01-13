import React from 'react';
import { makeStyles, Drawer, Divider } from '@material-ui/core';
import DataList from '../DataList/DataList';

const styles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

function DrawerBox(props) {
  const classes = styles();
  const actions = props;

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={actions.variant}
      open={actions.open}
      onClose={actions.onClose ? actions.onClose : null}
    >
      <div className={classes.toolbar} />
      <Divider />
      <DataList />
    </Drawer>
  );
}

export default DrawerBox;
