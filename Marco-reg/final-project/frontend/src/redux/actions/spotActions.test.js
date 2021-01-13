import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import actionTypes from './actionTypes';
import * as spotActions from './spotActions';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('spotActions', () => {
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

    test('requestUser with promise resolved should put actiontypes.LOAD_USER', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(spotActions.requestSpot());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SPOT);
    });
    test('requestUser with promise resolved should put actiontypes.LOAD_USER', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);

      await store.dispatch(spotActions.requestSpot());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SPOT_ERROR);
    });
  });
});
