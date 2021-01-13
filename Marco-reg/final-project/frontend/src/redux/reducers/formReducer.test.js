import formReducer from './formReducer';
import actionTypes from '../actions/actionTypes';

describe('formReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  test('should return the initial State', () => {
    const result = formReducer(undefined, {});
    expect(result).toEqual({});
  });

  test('should load spot when action dispatch', () => {
    const requestCreateProject = {
      type: actionTypes.CREATE_PROJECT,
      info: undefined,
    };

    const result = formReducer(initialState, requestCreateProject);

    expect(result).toEqual({ info: undefined });
  });
});
