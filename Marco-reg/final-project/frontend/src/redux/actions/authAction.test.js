/* eslint-disable no-unused-vars */
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import actionTypes from './actionTypes';
import * as authAction from './authAction';

import * as firebaseMethods from '../../firebase/firebaseMethod';

jest.mock('../../firebase/firebaseMethod');
jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('authAction', () => {
    let fakeData;
    let fakeError;
    let store;
    let fakeResolvePromise;

    beforeEach(() => {
      store = mockStore();
      fakeData = { user: 'peperoni' };
      fakeError = 'error';
      fakeResolvePromise = Promise.resolve(fakeData);
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
    test('request with promise resolved should put actiontypes.LOAD_GOOGLE_USER', async () => {
      firebaseMethods.default = jest.fn().mockReturnValueOnce(Promise.resolve({ user: 'someUser' }));
      axios.put = jest.fn().mockReturnValueOnce(fakeResolvePromise);
      await store.dispatch(authAction.loginUserWithGoogle());

      expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_GOOGLE);
    });
    test('request with promise resolved should put actiontypes.SIGNOUT_SUCESS', async () => {
      firebaseMethods.default = jest.fn().mockReturnValueOnce(Promise.resolve({ user: {} }));
      axios.put = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(authAction.loginUserWithGoogle());

      expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_ERROR);
    });
  });
});
