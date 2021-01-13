import axios from 'axios';
import actionTypes from './actionTypes';

const userUrl = 'http://192.168.0.17:2000/user';

export function isUserSelectingMenu(selectingMenu: boolean) {
  return {
    type: actionTypes.IS_USER_SELECTING_MENU,
    selectingMenu,
  };
}

export function isUserLoggedIn(user: boolean) {
  return {
    type: actionTypes.USER_IS_LOGGED_IN,
    user,
  };
}

export function getUserProfile(user: object) {
  return {
    type: actionTypes.GET_USER,
    user,
  };
}

export function getUserFromDB(id: 'string') {
  return async (dispatch: (arg0: { type: string; user: object; }) => void) => {
    try {
      const { data } = await axios.get(userUrl, { query: id });
      dispatch(getUserProfile(data[0]));
    } catch (error) {
      console.log(error);
    }
  };
}

export function postUserInDB(user: object) {
  return async (dispatch: (arg0: { type: string; user: object; }) => void) => {
    try {
      const { data } = await axios.post(userUrl, { query: user });
      dispatch(getUserProfile(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addOrRemoveFavoriteRecipeToUser(user: object) {
  return {
    type: actionTypes.ADD_OR_REMOVE_FAVORITE_RECIPE,
    user,
  };
}

export function deleteFromFavoriteRecipes(user: Object, recipe: object) {
  return async (dispatch: (arg0: { type: string; user: Object }) => void) => {
    try {
      const { data } = await axios.delete(`${userUrl}/favorite`, { data: { user, recipe } });
      dispatch(addOrRemoveFavoriteRecipeToUser(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addToFavoriteRecipes(user: object, recipe: object) {
  return async (dispatch: (arg0: { type: string; user: object }) => void) => {
    try {
      const { data } = await axios.put(`${userUrl}/favorite`, { user, recipe });
      dispatch(addOrRemoveFavoriteRecipeToUser(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addOwnRecipe(user: object) {
  return async (dispatch: (arg0: { type: string; user: object }) => void) => {
    try {
      const { data } = await axios.put(`${userUrl}/myrecipes`, { user });
      dispatch(addOrRemoveFavoriteRecipeToUser(data));
    } catch (error) {
      console.log(error);
    }
  };
}
