import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),

    },
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div id="loading_wrapper" className={classes.root}>
      <CircularProgress id="loading" />
    </div>
  );
}
