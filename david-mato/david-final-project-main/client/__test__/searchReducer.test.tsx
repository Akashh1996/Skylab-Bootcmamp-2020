// @ts-nocheck
import reducer from '../src/redux/reducers/searchReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('searchReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'string', recipe: {}, message: {} })).toEqual({});
  });

  it('should handle GET_RECIPE_BY_NAME', () => {
    expect(
      reducer({}, {
        type: actionTypes.GET_RECIPE_BY_NAME,
        recipe: { meals: ['Arrabiata'] },
      }),
    ).toEqual('Arrabiata');
  });

  it('should handle GET_RECIPE_BY_NAME_ERROR', () => {
    expect(
      reducer({}, {
        type: actionTypes.GET_RECIPE_BY_NAME_ERROR,
        message: { status: 'not found' },
      }),
    ).toEqual({ status: 'not found' });
  });

  it('should handle RESTORE_SEARCH_REDUCER', () => {
    expect(
      reducer({ name: 'Arrabiata' }, {
        type: actionTypes.RESTORE_SEARCH_REDUCER,
      }),
    ).toEqual({});
  });
});
