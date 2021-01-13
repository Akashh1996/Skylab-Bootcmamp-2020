import reducer from '../src/redux/reducers/recipesReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('recipesReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'string', recipe: {} })).toEqual([]);
  });

  it('should handle GET_RECIPE', () => {
    expect(
      reducer([], {
        type: actionTypes.GET_RECIPE,
        recipe: { meals: ['Arrabiata'] },
      }),
    ).toEqual(
      ['Arrabiata'],
    );
  });
});
