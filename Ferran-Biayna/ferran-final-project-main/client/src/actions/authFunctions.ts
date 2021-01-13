import firebase from 'firebase'
import actionAuthTypes from './actionAuthTypes'
import { getUser, addAndGetUser } from './userFunctions'
import * as Google from 'expo-google-app-auth'

function checkIfLoggedInSuccess (exists: boolean) {
  return {
    type: actionAuthTypes.CHECK_LOGIN_SUCCESS,
    logInExists: exists
  }
}

function checkIfLoggedInSuccessError (noExists: boolean) {
  return {
    type: actionAuthTypes.CHECK_LOGIN_ERROR,
    logInExists: noExists
  }
}

function signInError (error: any) {
  return {
    type: actionAuthTypes.SIGN_IN_ERROR,
    error: error,
    logInState: false
  }
}

function isLogging () {
  return {
    type: actionAuthTypes.IS_LOGGING,
    logInState: true
  }
}

export function isNotLogging () {
  return {
    type: actionAuthTypes.IS_NOT_LOGGING,
    logInState: false
  }
}

export function checkIfLoggedIn () {
  return (dispatch: Function) => {
    firebase.auth().onAuthStateChanged((firebaseUser:any) => {
      if (firebaseUser) {
        const { providerData } = firebaseUser
        dispatch(getUser(providerData[0].uid))
        dispatch(checkIfLoggedInSuccess(true))
      } else {
        dispatch(checkIfLoggedInSuccessError(false))
      }
    })
  }
}

export function isUserEqual (googleUser:any, firebaseUser:any) {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData
    for (let i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
        return true
      }
    }
  }
  return false
}

export function onSignIn (googleUser:any) {
  return (dispatch: Function) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe()
      if (!isUserEqual(googleUser, firebaseUser)) {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken)
        firebase.auth().signInWithCredential(credential).then((result) => {
          if (result.additionalUserInfo?.isNewUser) {
            dispatch(addAndGetUser(result.additionalUserInfo?.profile))
          } else {
            const { additionalUserInfo: { profile: { sub } } }:any = result
            dispatch(getUser(sub))
          }
        }
        ).catch((error) => {
          dispatch(isNotLogging())
          dispatch(signInError(error))
        })
      }
    })
  }
}

export function signInWithGoogleAsync () {
  return async (dispatch: Function) => {
    dispatch(isLogging())
    try {
      const result = await Google.logInAsync({
        androidClientId: '38128341226-6qhn5lvgpdc984n03acqm8dgmj01dogv.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      })
      if (result.type === 'success') {
        dispatch(onSignIn(result))
      } else {
        dispatch(isNotLogging())
        dispatch(signInError('error'))
      }
    } catch (error) {
      dispatch(isNotLogging())
      dispatch(signInError(error))
    }
  }
}
