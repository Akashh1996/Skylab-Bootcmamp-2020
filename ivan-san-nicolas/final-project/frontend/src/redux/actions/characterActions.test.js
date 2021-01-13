import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as characterActions from './characterActions';
import actionTypes from './ActionTypes';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('characterActions', () => {
  describe('functions with store dependancy', () => {
    let store = null;
    let fakeData = { data: 'character' };

    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'character' };
    });
    afterEach(() => {
      store = null;
      jest.resetAllMocks();
    });

    test('should call loadCharacter function and return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(characterActions.loadCharacter('string'));
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_CHARACTER);
    });
    test('should call loadCharacter function and return an error', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(characterActions.loadCharacter());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call loadCharacterByKey function and return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(characterActions.loadCharacterByKey());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_CHARACTER);
    });
    test('should call loadCharacterByKey function and return an error', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(characterActions.loadCharacterByKey());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call updateCharacter function and return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(characterActions.updateCharacter());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_CHARACTER);
    });
    test('should call updateCharacter function and return an error', async () => {
      axios.patch = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(characterActions.updateCharacter());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call deleteCharacter function and return an error', async () => {
      axios.delete = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(characterActions.deleteCharacter());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call createCharacter function and return an error', async () => {
      axios.post = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(characterActions.createCharacter());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });
  });

  describe('functions without store dependancy', () => {
    test('should return an object in setCharacterId', () => {
      const characterId = characterActions.setCharacterId('id');
      const objectResult = {
        type: actionTypes.LOAD_CHARACTER_ID,
        characterId: 'id',
      };
      expect(characterId).toEqual(objectResult);
    });
  });
});
