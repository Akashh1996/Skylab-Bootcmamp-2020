/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import './ListScreen.css';

import { listChallenges } from '../../redux/actions/challenge-actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
export default function ListScreen() {
  const classes = useStyles();

  const challengeList = useSelector((state) => state.challengeList);
  const { loading, error, challenges } = challengeList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);

  return (
    <div className="listScreen-mainContainer">

      {loading ? (
        <div className="loading">LOADING....</div>
      ) : error ? (
        <div className="error">ERROR, CHALLENGE NOT CREATED</div>
      ) : (
        <>
          <h3>LISTADO DE RETOS ACTIVOS</h3>
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              {challenges.map((challenge) => (
                <GridListTile key={challenge._id}>
                  <img src={challenge.image} alt={challenge.title} />
                  <GridListTileBar
                    title={challenge.title}
                    subtitle={(
                      <span>
                        by:
                        {' '}
                        {challenge.creator}
                      </span>
                )}
                    actionIcon={(
                      <Link to={`/challenges/${challenge._id}`} exact>
                        <IconButton id="icon-list" aria-label={`info about ${challenge.title}`} className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      </Link>
              )}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </>
      )}

    </div>
  );
}
