import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import actionTypes from './actionTypes';
import * as spotActions from './listActions';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('listActions', () => {
    let fakeData;
    let fakeError;
    let store;
    beforeEach(() => {
      store = mockStore();
      fakeData = { user: 'pepo' };
      fakeError = 'error';
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    test('requestList with promise resolved should put actiontypes.LOAD_USER', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(spotActions.requestListSpots());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SPOTS);
    });
    test('requestListError with promise resolved should put actiontypes.LOAD_USER', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);

      await store.dispatch(spotActions.requestListSpots());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SPOTS_ERROR);
    });
  });
});
