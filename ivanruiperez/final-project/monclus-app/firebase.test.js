/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-import-assign */
import signinWithGoogle from './firebase'
import * as Google from 'expo-google-app-auth'

jest.mock('expo-google-app-auth')

describe('firebase', () => {
  test('sign in with Google', async () => {
    Google.logInAsync = jest.fn().mockReturnValue(Promise.resolve({
      androidClientId: '1',
      iosClientId: '2',
      scopes: []
    }))

    const result = await signinWithGoogle()

    expect(result).toEqual({
      androidClientId: '1',
      iosClientId: '2',
      scopes: []
    })
  })
  test('sign in error', async () => {
    Google.logInAsync = jest.fn().mockReturnValue(Promise.reject('error'))

    const result = await signinWithGoogle()

    expect(result).toEqual('error')
  })
})
