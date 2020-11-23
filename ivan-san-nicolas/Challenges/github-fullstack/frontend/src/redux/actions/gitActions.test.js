import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as gitActions from './gitActions';
import actionTypes from './actionTypes';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('gitActions', () => {
  describe('functions with store dependancy', () => {
    let store = null;
    let fakeData = null;

    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'projects' };
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    test('should call loadProjects function and return an object with propery data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(gitActions.loadProjects());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECTS);
    });
    test('should call loadProjects function and return an error', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(gitActions.loadProjects());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call loadProject function and return an object with propery data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(gitActions.loadProject());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECT);
    });
    test('should call loadProject function and return an error', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(gitActions.loadProject());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call loadUsers function and return an object with propery data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(gitActions.loadUsers());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_USERS);
    });
    test('should call loadUsers function and return an error', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(gitActions.loadUsers());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call updateProject function and return an error', async () => {
      axios.patch = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(gitActions.updateProject());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });

    test('should call addProject function and return an error', async () => {
      axios.post = jest.fn().mockRejectedValueOnce(fakeData);
      await store.dispatch(gitActions.addProject());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR);
    });
  });
});
