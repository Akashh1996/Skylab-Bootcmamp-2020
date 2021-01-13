import axios from 'axios';
import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';
import actionTypes from './actionTypes';
import * as signinWithGoogle from '../../firebase/signinWithGoogle';

import loginUserWithGoogle from './loginUserWithGoogle';

jest.mock('../../firebase/signinWithGoogle');
jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('products actions', () => {
    let fakeError;
    let store;

    beforeEach(() => {
      store = mockStore();
      fakeError = 'error';
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    test('login with google', async () => {
      signinWithGoogle.default = jest.fn().mockReturnValueOnce(Promise.resolve({ user: 'ass' }));

      await store.dispatch(loginUserWithGoogle());
      expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_GOOGLE);
    });
    test('error on login with google', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(loginUserWithGoogle());
      expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_GOOGLE_ERROR);
    });
  });
});
