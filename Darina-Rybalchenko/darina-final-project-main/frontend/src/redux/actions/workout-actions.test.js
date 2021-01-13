import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
// import * as firebase from 'firebase';
import * as workoutActions from './workout-actions';
// import * as authActions from './auth-actions';
import './firebase/firebaseIndex';
import actionTypes from './actionTypes';

jest.mock('axios');
jest.mock('./firebase/firebaseIndex');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('workout-actions', () => {
    let fakeData;
    let fakeError;
    let store;
    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'workouts' };
      fakeError = 'error';
    });

    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    describe('requestWorkouts', () => {
      test('should dispatch the correct action', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData);
        const workouts = 'workouts';
        const expectedActions = [
          { type: actionTypes.LOAD_WORKOUTS, workouts },
        ];

        await store.dispatch(workoutActions.requestWorkouts());

        expect(store.getActions()).toEqual(expectedActions);
      });

      test('should dispatch the correct action', async () => {
        axios.get = jest.fn().mockRejectedValueOnce(fakeError);
        const workoutsError = 'error';
        const expectedAction = { type: actionTypes.LOAD_WORKOUTS_ERROR, workoutsError };

        await store.dispatch(workoutActions.requestWorkouts());

        expect(store.getActions()[0]).toEqual(expectedAction);
      });
    });
    describe('requestWorkoutDetail', () => {
      test('should disptach the correct action', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData);

        await store.dispatch(workoutActions.requestWorkoutDetail());

        expect(store.getActions()[0].type).toBe(actionTypes.LOAD_WORKOUT);
      });

      test('should disptach the correct action ', async () => {
        axios.get = jest.fn().mockRejectedValueOnce(fakeError);

        await store.dispatch(workoutActions.requestWorkoutDetail());

        expect(store.getActions()[0].type).toBe(actionTypes.LOAD_WORKOUT_ERROR);
      });
    });
  });
});
