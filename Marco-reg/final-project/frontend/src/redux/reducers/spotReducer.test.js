import spotReducer from './spotReducer';
import actionTypes from '../actions/actionTypes';

describe('spotReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  test('should return the initial State', () => {
    const result = spotReducer(undefined, {});
    expect(result).toEqual({});
  });

  test('should load spot when action dispatch', () => {
    const requestSpot = {
      type: actionTypes.LOAD_SPOT,
      spot: 'macba',
    };

    const result = spotReducer(initialState, requestSpot);

    expect(result).toEqual({ spot: 'macba' });
  });
  test('should send error  loading spots', () => {
    const requestSpotError = {
      type: actionTypes.LOAD_SPOT_ERROR,
      error: 'error',
    };
    const result = spotReducer(initialState, requestSpotError);
    expect(result).toEqual({ error: 'error' });
  });
});
