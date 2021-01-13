import reducer from '../src/redux/reducers/categoryRecipesReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('categoryRecipesReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'string', categoryRecipes: {} })).toEqual({});
  });

  it('should handle GET_CATEGORY_RECIPES', () => {
    expect(
      reducer({}, {
        type: actionTypes.GET_CATEGORY_RECIPES,
        categoryRecipes: { name: 'Arrabiata', type: 'pasta' },
      }),
    ).toEqual({ name: 'Arrabiata', type: 'pasta' });
  });

  it('should handle RESTORE_CATEGORY_RECIPES_REDUCER', () => {
    expect(
      reducer({ name: 'Arrabiata', type: 'pasta' }, {
        type: actionTypes.RESTORE_CATEGORY_RECIPES_REDUCER,
      }),
    ).toEqual({});
  });
});
