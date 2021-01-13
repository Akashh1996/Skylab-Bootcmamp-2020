import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as charactersActions from './charactersActions';
import actionTypes from './ActionTypes';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('charactersActions', () => {
  describe('functions with store dependancy', () => {
    let store = null;
    let fakeData = { data: 'characters' };

    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'characters' };
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    test('should call loadCharactersByOwner and return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(charactersActions.loadCharactersByOwner());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_CHARACTERS);
    });
    test('should call loadCharactersByOwner and return an error', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(charactersActions.loadCharactersByOwner());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });
  });
});
