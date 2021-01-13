import axios from 'axios'
import { User } from 'utils/interfaces'
import { hostUserUrl } from '../utils/hostUrl'
import actionTypes from './actionTypes'

function requestUserSuccess (user: User) {
  return {
    type: actionTypes.LOAD_USER,
    user
  }
}

function requestUserError (error: string) {
  return {
    type: actionTypes.LOAD_USER_ERROR,
    error
  }
}

function requestAddAndLoadUserSuccess (user: User) {
  return {
    type: actionTypes.ADD_AND_LOAD_USER,
    user
  }
}

function requestAddAndLoadUserError (error: string) {
  return {
    type: actionTypes.ADD_AND_LOAD_USER_ERROR,
    error
  }
}

function requestAddFavoritesSuccess (user: User) {
  return {
    type: actionTypes.ADD_FAVORITE,
    user
  }
}

function requestAddFavoritesError (error: string) {
  return {
    type: actionTypes.ADD_FAVORITE_ERROR,
    error
  }
}

function requestDeleteFavoriteSuccess (user: User) {
  return {
    type: actionTypes.DELETE_FAVORITE,
    user
  }
}

function requestDeleteFavoriteError (error: string) {
  return {
    type: actionTypes.DELETE_FAVORITE_ERROR,
    error
  }
}

export function getUser (sub: string) {
  return async (dispatch: Function) => {
    try {
      const user = await axios.get(hostUserUrl(), { params: { sub } })
      dispatch(requestUserSuccess(user.data))
    } catch (error) {
      dispatch(requestUserError(error))
    }
  }
}

export function addAndGetUser (user: any) {
  return async (dispatch: Function) => {
    const newUser = {
      admin: false,
      name: user.given_name,
      surname: user.family_name,
      email: user.email,
      photo: user.picture,
      sub: user.sub
    }
    try {
      const user = await axios.post(hostUserUrl(), { newUser })
      dispatch(requestAddAndLoadUserSuccess(user.data))
    } catch (error) {
      dispatch(requestAddAndLoadUserError(error))
    }
  }
}

export function addFavorite (user: User, establishmentId: string) {
  return async (dispatch: Function) => {
    try {
      const userUpdated = await axios.put(hostUserUrl(), { user, establishmentId })
      dispatch(requestAddFavoritesSuccess(userUpdated.data))
    } catch (error) {
      dispatch(requestAddFavoritesError(error))
    }
  }
}

export function deleteFavorite (user: User, establishmentId: string) {
  return async (dispatch: Function) => {
    try {
      const userUpdated = await axios.delete(hostUserUrl(), { data: { user, establishmentId } })
      dispatch(requestDeleteFavoriteSuccess(userUpdated.data))
    } catch (error) {
      dispatch(requestDeleteFavoriteError(error))
    }
  }
}
