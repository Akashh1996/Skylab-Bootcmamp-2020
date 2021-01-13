import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as listActions from './formAction';
import actionTypes from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('listActions', () => {
    let fakeData;
    let fakeError;
    let store;
    let newError;
    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'projects' };
      fakeError = 'error';
      newError = null;
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    test('CreateProject with promise   should put action.type delete project', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(listActions.createProject());

      expect(store.getActions()[0].type).toBe(actionTypes.CREATE_PROJECT);
    });
    test('CreateProject with promise reject should put action.type delete project error', async () => {
      axios.put = jest.fn().mockRejectedValueOnce(fakeError);

      await store.dispatch(listActions.createProject());

      expect(store.getActions()[0].type).toBe(actionTypes.CREATE_PROJECT_ERROR);
    });
    test('deleteProject with promise  should put action.type delete project', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(listActions.deleteProject());

      expect(store.getActions()[0].type).toBe(actionTypes.DELETE_PROJECT);
    });
    test('deleteProject with promise reject should put action.type delete project error', async () => {
      axios.delete = jest.fn().mockRejectedValueOnce(newError);

      await store.dispatch(listActions.deleteProject());

      expect(store.getActions()[0].type).toBe(actionTypes.DELETE_PROJECT_ERROR);
    });
  });
});
