import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as firebase from 'firebase';
import * as actions from './userAction';
import actionTypes from './actionTypes';
import './Firebase/firebaseIndex';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('User Actions', () => {
    let mockData;
    let mockError;
    let store;
    beforeEach(() => {
      store = mockStore();
      mockError = 'error';
      jest.spyOn(firebase, 'auth').mockImplementation(() => ({
        signInWithPopup: jest.fn().mockImplementation(() => Promise.resolve({
          result: {
            additionalUserInfo: {
              profile: {
                name: 'akash',
                photo: 'photoUrl',
                email: 'email',
              },
            },
          },
        })),
      }));

      firebase.auth.GoogleAuthProvider = jest
        .fn()
        .mockReturnValue({ addScope: jest.fn() });
    });
    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    describe(('Add User'), () => {
      test('should dispatch the correct action with success', async () => {
        mockData = { data: 'userData' };

        axios.post = jest.fn().mockResolvedValueOnce(mockData);
        const newUser = 'userData';
        const expectedAction = [{
          type: actionTypes.ADD_USER,
          newUser,
        }];

        await store.dispatch(actions.addUser());

        expect(store.getActions()).toEqual(expectedAction);
      });
      test('should dispatch the correct action with error', async () => {
        axios.post = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.ADD_USER_ERROR,
          error,
        }];

        await store.dispatch(actions.addUser());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe(('Load User Question'), () => {
      test('should dispatch the correct action with success', async () => {
        mockData = { data: 'userQuestion' };
        axios.get = jest.fn().mockResolvedValueOnce(mockData);
        const userQuestion = 'userQuestion';
        const expectedAction = [{
          type: actionTypes.LOAD_USER_QUESTION,
          userQuestion,
        }];

        await store.dispatch(actions.loadUserQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });

      test('should dispatch the correct action with error', async () => {
        axios.get = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.LOAD_USER_QUESTION_ERROR,
          error,
        }];

        await store.dispatch(actions.loadUserQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe('Auth sigin', () => {
      test('should dispatch the correct action', async () => {
        const user = {
          name: 'akash',
          photo: 'photoUrl',
          email: 'email',
        };
        const expectedActions = [
          { type: actionTypes.AUTH_LOGIN, user },
        ];

        await store.dispatch(actions.signInWithGoogle());

        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('singOut', () => {
      beforeEach(() => {
        store = mockStore();
        jest.spyOn(firebase, 'auth').mockImplementation(() => ({
          signOut: jest.fn().mockImplementation(() => Promise.resolve()),
        }));
      });

      afterEach(() => {
        jest.resetAllMocks();
        store = null;
      });

      test('should dispatch the correct action', async () => {
        const expectedActions = [
          { type: actionTypes.AUTH_LOGOUT },
        ];

        await store.dispatch(actions.signOut());

        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    describe('error cases', () => {
      beforeEach(() => {
        store = mockStore();
        jest.spyOn(firebase, 'auth').mockImplementation(() => ({
          signInWithPopup: jest.fn().mockImplementation(() => Promise.reject('error')),
          signOut: jest.fn().mockImplementation(() => Promise.reject('error')),
        }));
        firebase.auth.GoogleAuthProvider = jest
          .fn()
          .mockReturnValue({ addScope: jest.fn() });
      });

      afterEach(() => {
        jest.resetAllMocks();
        store = null;
      });

      test('should dispatch the correct action', async () => {
        const error = 'error';
        const expectedActions = [{ type: actionTypes.AUTH_LOGIN_ERROR, error }];

        await store.dispatch(actions.signInWithGoogle());

        expect(store.getActions()).toEqual(expectedActions);
      });

      test('should dispatch the correct action', async () => {
        const error = 'error';
        const expectedActions = [{ type: actionTypes.AUTH_LOGOUT_ERROR, error }];

        await store.dispatch(actions.signOut());

        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
