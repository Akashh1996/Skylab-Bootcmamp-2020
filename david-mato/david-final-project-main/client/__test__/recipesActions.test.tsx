// @ts-nocheck
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import actionTypes from '../src/redux/actions/actionTypes';
import * as actions from '../src/redux/actions/recipesActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('recipesActions', () => {
  let store: Object;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    axios.mockRestore();
  });

  it('should call getCategoryRecipesFromAPI and modify the store actions on resolve accordingly', async () => {
    const category = 'breakfast';
    const response = {
      data: [{ name: 'cereals', type: 'breakfast' }, { name: 'pancakes', type: 'breakfast' }],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.getCategoryRecipesFromAPI(category));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_CATEGORY_RECIPES,
      categoryRecipes: response.data,
    }]);
  });

  it('should call getCategoryRecipesFromAPI and, on reject, call console.log', async () => {
    const category = 'breakfast';
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.getCategoryRecipesFromAPI(category));

    expect(console.log).toHaveBeenCalled();
  });

  it('should call getRecipeCategoriesFromAPI and modify the store actions on resolve accordingly', async () => {
    const response = {
      data: ['dessert', 'breakfast', 'beef'],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.getRecipeCategoriesFromAPI());

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_RECIPE_CATEGORIES,
      categories: response.data,
    }]);
  });

  it('should call getRecipeCategoriesFromAPI and, on reject, call console.log', async () => {
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.getRecipeCategoriesFromAPI());

    expect(console.log).toHaveBeenCalled();
  });

  it('should call getRecipeFromAPI and modify the store actions on resolve accordingly', async () => {
    const response = {
      data: { name: 'salmon eggs' },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.getRecipeFromAPI());

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_RECIPE,
      recipe: response.data,
    }]);
  });

  it('should call getRecipeFromAPI and, on reject, call console.log', async () => {
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.getRecipeFromAPI());

    expect(console.log).toHaveBeenCalled();
  });

  it('should call getRecipeByNameFromAPI and, when its second argument is true, modify the store actions on resolve accordingly', async () => {
    const response = {
      data: { name: 'buns' },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.getRecipeByNameFromAPI('buns', true));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_CATEGORY_RECIPE_BY_NAME,
      recipe: response.data,
    }]);
  });

  it('should call getRecipeByNameFromAPI and, on reject, when its second argument is true, call console.log with error', async () => {
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.getRecipeByNameFromAPI('buns', true));

    expect(console.log).toHaveBeenCalled();
  });

  it('should call getRecipeByNameFromAPI and, when its second argument is false, modify the store actions on resolve accordingly', async () => {
    const response = {
      data: { name: 'salmon eggs' },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.getRecipeByNameFromAPI('salmon eggs', false));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_RECIPE_BY_NAME,
      recipe: response.data,
    }]);
  });

  it('should call getRecipeByNameFromAPI and, on reject, when its second argument is false, modify the store actions accordingly', async () => {
    const message = { code: '404', message: 'not found' };
    const response = {
      data: { name: 'salmon eggs' },
    };

    axios.get.mockImplementationOnce(() => Promise.reject(response));
    await store.dispatch(actions.getRecipeByNameFromAPI('salmon eggs', false));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_RECIPE_BY_NAME_ERROR,
      message,
    }]);
  });

  it('should call restoreSearchReducer and modify the store actions accordingly', () => {
    store.dispatch(actions.restoreSearchReducer());

    expect(store.getActions()).toEqual([{
      type: actionTypes.RESTORE_SEARCH_REDUCER,
    }]);
  });

  it('should call restoreCategoryRecipesReducer and modify the store actions accordingly', () => {
    store.dispatch(actions.restoreCategoryRecipesReducer());

    expect(store.getActions()).toEqual([{
      type: actionTypes.RESTORE_CATEGORY_RECIPES_REDUCER,
    }]);
  });

  it('should call restoreCategoryRecipeByNameReducer and modify the store actions accordingly', () => {
    store.dispatch(actions.restoreCategoryRecipeByNameReducer());

    expect(store.getActions()).toEqual([{
      type: actionTypes.RESTORE_CATEGORY_RECIPE_BY_NAME_REDUCER,
    }]);
  });
});
