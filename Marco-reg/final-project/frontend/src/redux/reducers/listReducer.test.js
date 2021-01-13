import listReducer from './listReducer';
import actionTypes from '../actions/actionTypes';

describe('listReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  test('should return the initial State', () => {
    const result = listReducer(undefined, {});
    expect(result).toEqual({});
  });

  test('should load spot when action dispatch', () => {
    const requestSpots = {
      type: actionTypes.LOAD_SPOTS,
      spots: undefined,
    };

    const result = listReducer(initialState, requestSpots);

    expect(result).toEqual({ spots: undefined });
  });
  test('should send error  loading spots', () => {
    const requestSpotsError = {
      type: actionTypes.LOAD_SPOTS_ERROR,
      error: 'error',
    };
    const result = listReducer(initialState, requestSpotsError);
    expect(result).toEqual({ error: 'error' });
  });
});
