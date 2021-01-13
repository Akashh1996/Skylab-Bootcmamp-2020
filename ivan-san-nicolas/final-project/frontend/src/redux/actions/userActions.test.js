import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as userActions from './userActions';
import actionTypes from './ActionTypes';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('userActions', () => {
  describe('functions with store dependancy', () => {
    let store = null;
    let fakeData = { data: 'user' };

    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'user' };
    });
    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    test('should call loadUser and return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(userActions.loadUser());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_USER);
    });
    test('should call loadUser and return an error', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(userActions.loadUser());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call updateUser and return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(userActions.updateUser());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_USER);
    });
    test('should call updateUser and return an error in updatUser', async () => {
      axios.patch = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(userActions.updateUser());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call deleteUser function and return an error', async () => {
      axios.delete = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(userActions.deleteUser());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });
  });

  describe('functions without store dependancy', () => {
    test('should return an object with userId in setUserId', () => {
      const userId = userActions.setUserId('userId');
      const objectResult = {
        type: actionTypes.LOAD_USER_ID,
        userId: 'userId',
      };

      expect(userId).toEqual(objectResult);
    });
  });
});
