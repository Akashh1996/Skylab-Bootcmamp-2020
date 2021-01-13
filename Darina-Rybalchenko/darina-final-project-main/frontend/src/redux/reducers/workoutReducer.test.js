import workoutReducer from './workoutReducer';
import actionTypes from '../actions/actionTypes';

describe('reducers', () => {
  let initialState;
  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  describe('workoutReducer', () => {
    test('should return the initial state without action', () => {
      const result = workoutReducer(undefined, {});
      expect(result).toEqual({});
    });

    test('should add workouts to the state', () => {
      const loadWorkoutsAction = {
        type: actionTypes.LOAD_WORKOUTS,
        workouts: 'new workout',
      };

      const result = workoutReducer(initialState, loadWorkoutsAction);
      expect(result).toEqual({ workouts: 'new workout' });
    });

    test('should add the workout to the state', () => {
      const loadWorkoutAction = {
        type: actionTypes.LOAD_WORKOUT,
        workout: 'new workout',
      };

      const result = workoutReducer(initialState, loadWorkoutAction);
      expect(result).toEqual({ workout: 'new workout' });
    });

    test('should add the workoutsError to the state', () => {
      const loadWorkoutsErrorAction = {
        type: actionTypes.LOAD_WORKOUTS_ERROR,
        workoutsError: 'new error',
      };

      const result = workoutReducer(initialState, loadWorkoutsErrorAction);
      expect(result).toEqual({ errorWorkout: 'new error' });
    });

    test('should add the workoutError to the state', () => {
      const loadWorkoutErrorAction = {
        type: actionTypes.LOAD_WORKOUT_ERROR,
        workoutError: 'new error',
      };

      const result = workoutReducer(initialState, loadWorkoutErrorAction);
      expect(result).toEqual({ errorWorkout: 'new error' });
    });
  });
});
