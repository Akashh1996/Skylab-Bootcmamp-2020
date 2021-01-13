import reducer from '../src/redux/reducers/userReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('searchReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {
      type: 'string', user: {}, selectingMenu: true, menu: {},
    })).toEqual({});
  });

  it('should handle USER_IS_LOGGED_IN', () => {
    expect(
      reducer({}, {
        type: actionTypes.USER_IS_LOGGED_IN,
        user: true,
      }),
    ).toEqual({ isUserLoggedIn: true });
  });

  it('should handle GET_USER', () => {
    expect(
      reducer({}, {
        type: actionTypes.GET_USER,
        user: { name: 'David' },
      }),
    ).toEqual({ user: { name: 'David' } });
  });

  it('should handle ADD_OR_REMOVE_FAVORITE_RECIPE', () => {
    expect(
      reducer({}, {
        type: actionTypes.ADD_OR_REMOVE_FAVORITE_RECIPE,
        user: { name: 'David' },
      }),
    ).toEqual({ user: { name: 'David' } });
  });

  it('should handle UPDATE_USER_GROCERY_LIST', () => {
    expect(
      reducer({}, {
        type: actionTypes.UPDATE_USER_GROCERY_LIST,
        user: { name: 'David' },
      }),
    ).toEqual({ user: { name: 'David' } });
  });

  it('should handle ADD_MENU_TO_USER', () => {
    expect(
      reducer({}, {
        type: actionTypes.ADD_MENU_TO_USER,
        menu: { name: 'David' },
      }),
    ).toEqual({ user: { name: 'David' } });
  });

  it('should handle IS_USER_SELECTING_MENU', () => {
    expect(
      reducer({}, {
        type: actionTypes.IS_USER_SELECTING_MENU,
        selectingMenu: true,
      }),
    ).toEqual({ selectingMenu: true });
  });
});
