import actionTypes from '../actions/actionTypes';

export default function workoutReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_WORKOUTS:
      return { ...state, workouts: action.workouts };
    case actionTypes.LOAD_WORKOUTS_ERROR:
      return { ...state, errorWorkout: action.workoutsError };
    case actionTypes.LOAD_WORKOUT:
      return { ...state, workout: action.workout };
    case actionTypes.LOAD_WORKOUT_ERROR:
      return { ...state, errorWorkout: action.workoutError };
    default:
      return state;
  }
}
