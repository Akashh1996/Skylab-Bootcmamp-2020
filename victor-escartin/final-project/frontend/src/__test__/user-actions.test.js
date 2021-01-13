import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as firebase from 'firebase';
import '../Firebase/firebase';
import * as userActions from '../redux/actions/user-actions';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('axios');
jest.mock('../Firebase/firebase');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user-actions', () => {
  let store;

  describe('userRegister', () => {
    beforeEach(() => {
      store = mockStore();

      jest.spyOn(firebase, 'auth').mockImplementation(() => ({
        signInWithPopup: jest.fn().mockImplementation(() => Promise.resolve({
          user: {
            displayName: 'xx',
            email: 'xxx',
            uid: 'xxx',
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
      const expectedActions = { type: actionTypes.USERS_REGISTER_REQUEST };
      await store.dispatch(userActions.userRegister());

      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });

  describe('singOutUser', () => {
    beforeEach(() => {
      store = mockStore();
      jest.spyOn(firebase, 'auth').mockImplementation(() => ({
        signOutUser: jest.fn().mockImplementation(() => Promise.resolve()),
      }));
    });

    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    test('should dispatch the correct action', async () => {
      const expectedActions = [
        { type: actionTypes.SIGN_OUT_SUCCESS },
      ];

      await store.dispatch(userActions.signOutUser());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
