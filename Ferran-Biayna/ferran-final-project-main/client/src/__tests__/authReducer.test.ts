import actionAuthTypes from '../actions/actionAuthTypes'
import authReducer from '../reducers/authReducer'

describe('authReducer', () => {
  test('should return user -> actionAuthTypes = CHECK_LOGIN_SUCCESS', () => {
    const testAuth = true
    const Action = {
      type: actionAuthTypes.CHECK_LOGIN_SUCCESS,
      logInExists: testAuth
    }

    const state = authReducer({}, Action)

    expect(state).toEqual({ logInExists: testAuth })
  })

  test('should return error -> actionAuthTypes = CHECK_LOGIN_ERROR', () => {
    const testAuth = false
    const Action = {
      type: actionAuthTypes.CHECK_LOGIN_ERROR,
      logInExists: testAuth
    }

    const state = authReducer({}, Action)

    expect(state).toEqual({ logInExists: testAuth })
  })

  test('should return -> actionAuthTypes = IS_LOGGING', () => {
    const testAuth = true
    const Action = {
      type: actionAuthTypes.IS_LOGGING,
      logInState: testAuth
    }

    const state = authReducer({}, Action)

    expect(state).toEqual({ logInState: testAuth })
  })

  test('should return -> actionAuthTypes = IS_NOT_LOGGING', () => {
    const testAuth = false
    const Action = {
      type: actionAuthTypes.IS_NOT_LOGGING,
      logInState: testAuth
    }

    const state = authReducer({}, Action)

    expect(state).toEqual({ logInState: testAuth })
  })

  test('should return error -> actionAuthTypes = SIGN_IN_ERROR', () => {
    const testAuth = 'error'
    const Action = {
      type: actionAuthTypes.SIGN_IN_ERROR,
      error: testAuth
    }

    const state = authReducer({}, Action)

    expect(state).toEqual({ error: testAuth })
  })

  test('should return the default state', () => {
    const state = authReducer({}, { type: 'skylab' })

    expect(state).toEqual({})
  })
})
