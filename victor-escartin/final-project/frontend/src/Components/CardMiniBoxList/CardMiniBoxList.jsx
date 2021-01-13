import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import './CardMiniBoxList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CardMiniBoxList({ challenge }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className="challenge-item">
          <Grid item>
            <ButtonBase className="challenge-item_image">
              <img className={classes.img} alt="complex" src={challenge.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={5} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {challenge.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {challenge.miniDescription}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {challenge.category}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  OBJETIVO:
                  {' '}
                  {challenge.target}
                  {' '}
                  €
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} className="challenge-item_btn">
                  VER DETALLES
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
