import axios from 'axios';
import actionTypes from './actionTypes';

const recipesUrl = 'http://192.168.0.17:2000/recipes';

export function getRecipeFromAPISuccess(recipe: object) {
  return {
    type: actionTypes.GET_RECIPE,
    recipe,
  };
}

export function getRecipeFromAPI() {
  return async (dispatch: (arg0: { type: string; recipe: object; }) => void) => {
    try {
      const { data } = await axios.get(recipesUrl);
      dispatch(getRecipeFromAPISuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function restoreCategoryRecipeByNameReducer() {
  return {
    type: actionTypes.RESTORE_CATEGORY_RECIPE_BY_NAME_REDUCER,
  };
}

export function getRecipeByNameFromAPISuccess(recipe: object) {
  return {
    type: actionTypes.GET_RECIPE_BY_NAME,
    recipe,
  };
}

export function getRecipeByNameFromAPIError(message: object) {
  return {
    type: actionTypes.GET_RECIPE_BY_NAME_ERROR,
    message,
  };
}

export function getCategoryRecipeByNameFromAPISuccess(recipe: object) {
  return {
    type: actionTypes.GET_CATEGORY_RECIPE_BY_NAME,
    recipe,
  };
}

export function getRecipeByNameFromAPI(name: string, isCategorySearch: boolean) {
  return async (dispatch: (arg0: { type: string; recipe?: object; message?: object }) => void) => {
    try {
      const { data } = await axios.get(`${recipesUrl}/${name}`, { name });
      if (isCategorySearch) {
        dispatch(getCategoryRecipeByNameFromAPISuccess(data));
      } else {
        dispatch(getRecipeByNameFromAPISuccess(data));
      }
    } catch (error) {
      if (isCategorySearch) {
        console.log(error);
      } else {
        dispatch(getRecipeByNameFromAPIError(
          { code: '404', message: 'not found' },
        ));
      }
    }
  };
}

export function restoreCategoryRecipesReducer() {
  return {
    type: actionTypes.RESTORE_CATEGORY_RECIPES_REDUCER,
  };
}

export function restoreSearchReducer() {
  return {
    type: actionTypes.RESTORE_SEARCH_REDUCER,
  };
}

export function getRecipeCategoriesFromAPISuccess(categories: object) {
  return {
    type: actionTypes.GET_RECIPE_CATEGORIES,
    categories,
  };
}

export function getRecipeCategoriesFromAPI() {
  return async (dispatch: (arg0: { type: string; categories: object; }) => void) => {
    try {
      const { data } = await axios.get(`${recipesUrl}/categories`);
      dispatch(getRecipeCategoriesFromAPISuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCategoryRecipesFromAPISuccess(categoryRecipes: object) {
  return {
    type: actionTypes.GET_CATEGORY_RECIPES,
    categoryRecipes,
  };
}

export function getCategoryRecipesFromAPI(category: string) {
  return async (dispatch: (arg0: { type: string; categoryRecipes: object; }) => void) => {
    try {
      const { data } = await axios.get(`${recipesUrl}/categories/${category}`);
      dispatch(getCategoryRecipesFromAPISuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
