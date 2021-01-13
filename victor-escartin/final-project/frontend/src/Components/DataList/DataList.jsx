/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BorderColorIcon from '@material-ui/icons/BorderColor';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function DataList() {
  return (
    <div className="main-container">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemLink href="/">
            <ListItemText primary="Perfil" />
          </ListItemLink>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <BorderColorIcon />
          </ListItemIcon>
          <ListItemLink href="/create">
            <ListItemText primary="Crear Reto" />
          </ListItemLink>
        </ListItem>
      </List>

      <ListItem button>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemLink href="/admin">
          <ListItemText primary="Tus Retos" />
        </ListItemLink>
      </ListItem>

      <Divider />

      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="/">
          <ListItemText primary="Menú Principal" />
        </ListItemLink>

        <ListItemLink href="/challenges">
          <ListItemText primary="Retos Activos" />
        </ListItemLink>

        <ListItemLink href="/donate">
          <ListItemText primary="Haz una Donación" />
        </ListItemLink>
      </List>
    </div>
  );
}
