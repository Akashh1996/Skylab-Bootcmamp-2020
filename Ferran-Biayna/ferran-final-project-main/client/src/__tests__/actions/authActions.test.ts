import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { isUserEqual, signInWithGoogleAsync, checkIfLoggedIn, onSignIn } from '../../actions/authFunctions'
import * as Google from 'expo-google-app-auth'
import firebase from 'firebase'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('firebase')
jest.mock('expo-google-app-auth')

describe('AuthFunctions', () => {
  describe('checkIfLoggedIn - firebaseUser', () => {
    beforeEach(() => {
      (firebase.auth as jest.Mocked<any>).mockReturnValue({
        onAuthStateChanged: jest.fn().mockImplementationOnce(
          (firebaseUser) => { firebaseUser({ providerData: [{ uid: 1 }] }) })
      })
      store.dispatch(checkIfLoggedIn())
    })

    test('should call firebase.auth', () => {
      (firebase.auth as jest.Mocked<any>).mockReturnValue({
        onAuthStateChanged: jest.fn().mockImplementationOnce(
          (firebaseUser) => { firebaseUser(undefined) })
      })
      expect(firebase.auth).toHaveBeenCalled()
    })
  })

  describe('checkIfLoggedIn - !firebaseUser', () => {
    beforeEach(() => {
      (firebase.auth as jest.Mocked<any>).mockReturnValue({
        onAuthStateChanged: jest.fn().mockImplementationOnce(
          (firebaseUser) => { firebaseUser(undefined) })
      })
      store.dispatch(checkIfLoggedIn())
    })

    test('should call firebase.auth', () => {
      expect(firebase.auth).toHaveBeenCalled()
    })
  })

  describe('signInWithGoogleAsync - result type success', () => {
    beforeEach(async () => {
      Google.logInAsync.mockImplementationOnce(() => Promise.resolve({ type: 'success' }))
      await store.dispatch(signInWithGoogleAsync())
    })

    test('should call Google.logInAsync', () => {
      expect(Google.logInAsync).toHaveBeenCalled()
    })
  })

  describe('signInWithGoogleAsync - result type other', () => {
    beforeEach(async () => {
      Google.logInAsync.mockImplementationOnce(() => Promise.resolve({ type: 'other' }))
      await store.dispatch(signInWithGoogleAsync())
    })

    test('should call Google.logInAsync', () => {
      expect(Google.logInAsync).toHaveBeenCalled()
    })
  })

  describe('signInWithGoogleAsync - result error', () => {
    beforeEach(async () => {
      Google.logInAsync.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(signInWithGoogleAsync())
    })

    test('should call Google.logInAsync', () => {
      expect(Google.logInAsync).toHaveBeenCalled()
    })
  })

  describe('isUserEqual - firebaseUser', () => {
    beforeEach(() => {
      (firebase.auth as jest.Mocked<any>).mockReturnValue({
        onAuthStateChanged: jest.fn().mockImplementationOnce(
          (firebaseUser) => { firebaseUser({ providerData: [{ uid: 1, providerId: 1 }] }) })
      })
      store.dispatch(isUserEqual({}, { providerData: [{ providerId: 1 }] }))
    })

    test('should call Google.logInAsync', () => {
      expect(isUserEqual).toHaveBeenCalled()
    })
  })

  describe('isUserEqual - firebaseUser null', () => {
    beforeEach(() => {
      (firebase.auth as jest.Mocked<any>).mockReturnValue({
        onAuthStateChanged: jest.fn().mockImplementationOnce(
          (firebaseUser) => { firebaseUser({ providerData: [{ uid: 1 }] }) })
      })
      store.dispatch(isUserEqual({}, null))
    })

    test('should call firebase.auth', () => {
      expect(isUserEqual).toHaveBeenCalled()
    })
  })

  describe('onSignIn - googleUser', () => {
    beforeEach(() => {
      (firebase.auth as jest.Mocked<any>).mockReturnValue({
        onAuthStateChanged: jest.fn().mockImplementationOnce(
          (firebaseUser) => { firebaseUser({ unsubscribe: jest.fn() }) })
      })
      store.dispatch(onSignIn({}))
    })

    test('should call Google.logInAsync', () => {
      expect(onSignIn).toHaveBeenCalled()
    })
  })
})
