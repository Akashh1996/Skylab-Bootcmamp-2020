import React from 'react';
import './WorkoutList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import EventIcon from '@material-ui/icons/Event';
import { requestWorkouts } from '../../redux/actions/workout-actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    background: '#edebe5',
    color: '#41555a',
    height: '500px',
    fontFamily: 'Poppins',
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

function WorkoutList({ workouts, dispatch }) {
  const classes = useStyles();
  if (!workouts || !workouts.length) {
    dispatch(requestWorkouts());
  }

  return (

    <main className="workout-list-container">
      <ul className="workout-list">
        {workouts && workouts.map((workout) => (
          <li key={performance.now() * Math.random()} className="list">
            <Link className="link-detail" to={`/workouts/${workout._id}`}>
              <Card style={{ marginTop: '15px' }} className={classes.root}>
                <CardActionArea className="card-container">
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="250"
                    image={workout.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent style={{ fontFamily: 'Poppins' }}>
                    <Typography className="workout-list__title" theme={theme} data-testid="workout-name" gutterBottom variant="h5" component="h2">
                      {workout.name}
                    </Typography>
                    <Typography className="workout-list__text" variant="body2" component="p">
                      {workout.description2}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '10px', fontSize: '16px' }} component="p">
                      Price:
                      {' '}
                      {workout.price}
                      €
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '10px' }} component="p">
                      <AccessTimeIcon />
                      {' '}
                      {workout.duration}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '10px' }} component="p">
                      <PlaceIcon />
                      {' '}
                      {workout.place}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '10px' }} component="p">
                      <EventIcon />
                      {' '}
                      {workout.scheduleInfo}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>

  );
}

WorkoutList.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

WorkoutList.defaultProps = {
  workouts: [],
};

function mapStateToProps(state) {
  return {
    workouts: state.workoutReducer.workouts,
  };
}

export default connect(mapStateToProps)(WorkoutList);
