import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as projectActions from './project-actions';
import * as userActions from './user-actions';
import actionTypes from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('project-actions', () => {
    let fakeData;
    let fakeError;
    let store;
    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'projects' };
      fakeError = 'error';
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    test('requestProjects with promise resolved should put action.type LOAD_PROJECTS in the store', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(projectActions.requestProjects());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECTS);
    });

    test('requestProjects with promise rejected should put action.type LOAD_PROJECTS_ERROR in the store', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);

      await store.dispatch(projectActions.requestProjects());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECTS_ERROR);
    });

    test('requestProjectDetail with promise resolved should put action.type LOAD_PROJECT in the store', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(projectActions.requestProjectDetail());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECT);
    });

    test('requestProjectDetail with promise rejected should put action.type LOAD_PROJECT_ERROR in the store', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);

      await store.dispatch(projectActions.requestProjectDetail());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECT_ERROR);
    });

    test('createProject with promise resolved should put action.type CREATE_PROJECT in the store', async () => {
      axios.post = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(projectActions.createProject({}));

      expect(store.getActions()[0].type).toBe(actionTypes.CREATE_PROJECT);
    });

    test('createProject with promise rejected should put action.type CREATE_PROJECT_ERROR in the store', async () => {
      axios.post = jest.fn().mockRejectedValueOnce(fakeError);

      await store.dispatch(projectActions.createProject({}));

      expect(store.getActions()[0].type).toBe(actionTypes.CREATE_PROJECT_ERROR);
    });
  });

  describe('user-actions', () => {
    let fakeData;
    let fakeError;
    let store;
    beforeEach(() => {
      store = mockStore();
      fakeData = { data: 'users' };
      fakeError = 'error';
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    test('getUserFromGithub with promise resolved should put action.type LOAD_USER in the store', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(userActions.getUserFromGithub());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_USER);
    });

    test('getUserFromGithub with promise rejected should put action.type LOAD_USER_ERROR in the store', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);

      await store.dispatch(userActions.getUserFromGithub());

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_USER_ERROR);
    });

    test('logOutUser should put action.type USER_LOGOUT in the store', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);

      await store.dispatch(userActions.logOutUser());

      expect(store.getActions()[0].type).toBe(actionTypes.USER_LOGOUT);
    });
  });
});
