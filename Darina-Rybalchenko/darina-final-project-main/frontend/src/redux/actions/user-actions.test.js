/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as firebase from 'firebase';
import * as userActions from './user-actions';
import './firebase/firebaseIndex';
import actionTypes from './actionTypes';

jest.mock('axios');
jest.mock('./firebase/firebaseIndex');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user-actions', () => {
  let store;
  describe('signInWithGoogle', () => {
    beforeEach(() => {
      store = mockStore();

      jest.spyOn(firebase, 'auth').mockImplementation(() => ({
        signInWithPopup: jest.fn().mockImplementation(() => Promise.resolve({
          user: {
            displayName: { additionalUserInfo: { profile: { name: 'a' } } },
            uid: { additionalUserInfo: { profile: { uid: 'b' } } },
            photoURL: { additionalUserInfo: { profile: { photoURL: 'c' } } },
            email: { additionalUserInfo: { profile: { email: 'd' } } },
          },
          additionalUserInfo: {
            profile: {
              name: '1', uid: '2', photURL: '3', email: '4',
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

    test('should dispatch the correct action', async () => {
      axios.patch = jest.fn().mockResolvedValueOnce();

      const user = {
        displayName: { additionalUserInfo: { profile: { name: 'a' } } },
        uid: { additionalUserInfo: { profile: { uid: 'b' } } },
        photoURL: { additionalUserInfo: { profile: { photoURL: 'c' } } },
        email: { additionalUserInfo: { profile: { email: 'd' } } },
      };
      const expectedActions = [
        { type: actionTypes.AUTH_LOGIN, user },
      ];

      await store.dispatch(userActions.signInWithGoogle());
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
        { type: actionTypes.AUTH_SIGNOUT },
      ];

      await store.dispatch(userActions.signOut());

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
      const errorUser = 'error';
      const expectedActions = [{ type: actionTypes.AUTH_LOGIN_ERROR, errorUser }];

      await store.dispatch(userActions.signInWithGoogle());

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('should dispatch the correct action', async () => {
      const errorUser = 'error';
      const expectedActions = [{ type: actionTypes.AUTH_SIGNOUT_ERROR, errorUser }];

      await store.dispatch(userActions.signOut());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('addUser', () => {
    let fakeUser;
    let fakeError;

    beforeEach(() => {
      store = mockStore();
      fakeUser = { data: {} };
      fakeError = 'error';
    });

    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    test('should dispatch the correct action', async () => {
      axios.patch = jest.fn().mockResolvedValueOnce(fakeUser);
      const expectedActions = [
        { type: actionTypes.ADD_USER, user: fakeUser.data },
      ];

      await store.dispatch(userActions.addUser({}));

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('should dispatch the correct action', async () => {
      axios.patch = jest.fn().mockRejectedValueOnce(fakeError);
      const expectedActions = [
        { type: actionTypes.ADD_USER_ERROR, userError: fakeError },
      ];

      await store.dispatch(userActions.addUser({}));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('saveUserFromLocalStorage', () => {
    let fakeUser;

    beforeEach(() => {
      store = mockStore();
      fakeUser = { data: {} };
    });

    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    test('should dispatch the correct action', async () => {
      const expectedActions = [
        { type: actionTypes.SAVE_USER, user: fakeUser.data },
      ];

      await store.dispatch(userActions.saveUserFromLocalStorage({}));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('createUserBooking', () => {
    let fakeUser;
    let fakeError;

    beforeEach(() => {
      store = mockStore();
      fakeUser = { data: {} };
      fakeError = 'error';
    });

    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    test('should dispatch the correct action', async () => {
      axios.put = jest.fn().mockResolvedValueOnce(fakeUser);
      const expectedActions = [
        { type: actionTypes.CREATE_BOOKING, user: fakeUser.data },
      ];

      await store.dispatch(userActions.createUserBooking({}));

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('should dispatch the correct action', async () => {
      axios.put = jest.fn().mockRejectedValueOnce(fakeError);
      const expectedActions = [
        { type: actionTypes.CREATE_BOOKING_ERROR, userError: fakeError },
      ];

      await store.dispatch(userActions.createUserBooking({}));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('fetchUser', () => {
    let fakeUser;
    let fakeError;

    beforeEach(() => {
      store = mockStore();
      fakeUser = { data: {} };
      fakeError = 'error';
    });

    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    test('should dispatch the correct action', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeUser);
      const expectedActions = [
        { type: actionTypes.FETCH_USER, user: fakeUser.data },
      ];

      await store.dispatch(userActions.fetchUser({}));

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('should dispatch the correct action', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);
      const expectedActions = [
        { type: actionTypes.FETCH_USER_ERROR, userError: fakeError },
      ];

      await store.dispatch(userActions.fetchUser({}));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
