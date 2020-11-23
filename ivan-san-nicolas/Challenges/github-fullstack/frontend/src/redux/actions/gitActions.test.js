import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as gitActions from './gitActions';
import actionTypes from './actionTypes';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('gitActions', () => {
  let store = null;
  let fakeData = null;
  let fakeError = null;

  beforeEach(() => {
    store = mockStore();
    fakeData = { data: 'projects' };
    fakeError = 'error';
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should call dispatch when successful try', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData);
    await store.dispatch(gitActions.loadProjects());
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECTS);
  });
});
