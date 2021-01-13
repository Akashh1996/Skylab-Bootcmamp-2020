import * as Location from 'expo-location'
import actionPermissionsTypes from './actionLocationTypes'

function getPermissionsNoAccepted (error: string) {
  return {
    type: actionPermissionsTypes.PERMISSIONS_NOT_ACCEPTED,
    error
  }
}

function getPermissionsError (error: string) {
  return {
    type: actionPermissionsTypes.PERMISSIONS_ERROR,
    error
  }
}

function getLocationSuccess (latitude: number, longitude: number) {
  return {
    type: actionPermissionsTypes.LOCATION_SUCCESS,
    latitude,
    longitude
  }
}

function getLocationError (error: string) {
  return {
    type: actionPermissionsTypes.LOCATION_ERROR,
    error
  }
}

function getCitySuccess (location: any) {
  return {
    type: actionPermissionsTypes.CITY_SUCCESS,
    city: location[0].city
  }
}

function getCityError (error: string) {
  return {
    type: actionPermissionsTypes.CITY_ERROR,
    error
  }
}

export function getPermissionsUbication () {
  return async (dispatch: Function) => {
    try {
      const permission = await Location.requestPermissionsAsync()
      const { status }:any = permission
      status !== 'granted'
        ? dispatch(getPermissionsNoAccepted('Sin permiso'))
        : dispatch(getLocation())
    } catch (error) {
      dispatch(getPermissionsError(error))
    }
  }
}

export function getLocation () {
  return async (dispatch: Function) => {
    try {
      const geoLocation = await Location.getCurrentPositionAsync({})
      const { coords: { latitude, longitude } }:any = geoLocation
      dispatch(getCity(latitude, longitude))
      dispatch(getLocationSuccess(latitude, longitude))
    } catch (error) {
      dispatch(getLocationError(error))
    }
  }
}

export function getCity (latitude: number, longitude: number) {
  return async (dispatch: Function) => {
    try {
      const location = await Location.reverseGeocodeAsync({ latitude, longitude })
      dispatch(getCitySuccess(location))
    } catch (error) {
      dispatch(getCityError(error))
    }
  }
}
