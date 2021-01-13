// @ts-nocheck
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import actionTypes from '../src/redux/actions/actionTypes';
import {
  isUserLoggedIn,
  isUserSelectingMenu,
  getUserFromDB,
  addToFavoriteRecipes,
  deleteFromFavoriteRecipes,
  postUserInDB,
  addOwnRecipe,
} from '../src/redux/actions/userActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('userActions', () => {
  let store: Object;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    axios.mockRestore();
  });

  it('should call isUserSelectingMenu and modify the store actions accordingly', () => {
    store.dispatch(isUserSelectingMenu(false));

    expect(store.getActions()).toEqual([{
      type: actionTypes.IS_USER_SELECTING_MENU,
      selectingMenu: false,
    }]);
  });

  it('should call isUserLoggedIn and modify the store actions accordingly', () => {
    store.dispatch(isUserLoggedIn(false));

    expect(store.getActions()).toEqual([{
      type: actionTypes.USER_IS_LOGGED_IN,
      user: false,
    }]);
  });

  it('should call getUserFromDB and modify the store actions on resolve accordingly', async () => {
    const id = '1234';
    const response = {
      data: [{ name: 'David' }],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(getUserFromDB(id));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_USER,
      user: response.data[0],
    }]);
  });

  it('should call getUserFromDB and, on reject, call console.log', async () => {
    const id = '1234';
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(getUserFromDB(id));

    expect(console.log).toHaveBeenCalled();
  });

  it('should call postUserInDB and modify the store actions on resolve accordingly', async () => {
    const user = null;
    const response = {
      data: { name: 'David' },
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(postUserInDB(user));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_USER,
      user: response.data,
    }]);
  });

  it('should call postUserInDB and, on reject, call console.log', async () => {
    const user = null;
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.post.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(postUserInDB(user));

    expect(console.log).toHaveBeenCalled();
  });

  it('should call deleteFromFavoriteRecipes and modify the store actions on resolve accordingly', async () => {
    const user = null;
    const recipe = null;
    const response = {
      data: { name: 'David' },
    };

    axios.delete.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(deleteFromFavoriteRecipes(user, recipe));

    expect(store.getActions()).toEqual([{
      type: actionTypes.ADD_OR_REMOVE_FAVORITE_RECIPE,
      user: response.data,
    }]);
  });

  it('should call deleteFromFavoriteRecipes and, on reject, call console.log', async () => {
    const user = null;
    const recipe = null;
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(deleteFromFavoriteRecipes(user, recipe));

    expect(console.log).toHaveBeenCalled();
  });

  it('should call addToFavoriteRecipes and modify the store actions on resolve accordingly', async () => {
    const user = null;
    const recipe = null;
    const response = {
      data: { name: 'David' },
    };

    axios.put.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(addToFavoriteRecipes(user, recipe));

    expect(store.getActions()).toEqual([{
      type: actionTypes.ADD_OR_REMOVE_FAVORITE_RECIPE,
      user: response.data,
    }]);
  });

  it('should call addToFavoriteRecipes and, on reject, call console.log', async () => {
    const user = null;
    const recipe = null;
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(addToFavoriteRecipes(user, recipe));

    expect(console.log).toHaveBeenCalled();
  });

  it('should call addOwnRecipe and modify the store actions on resolve accordingly', async () => {
    const user = null;
    const response = {
      data: { name: 'David' },
    };

    axios.put.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(addOwnRecipe(user));

    expect(store.getActions()).toEqual([{
      type: actionTypes.ADD_OR_REMOVE_FAVORITE_RECIPE,
      user: response.data,
    }]);
  });

  it('should call addOwnRecipe and, on reject, call console.log', async () => {
    const user = null;
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.put.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(addOwnRecipe(user));

    expect(console.log).toHaveBeenCalled();
  });
});
