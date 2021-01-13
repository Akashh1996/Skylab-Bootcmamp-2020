
import actionTypes from '../actions/actionTypes'
import userReducer from '../reducers/userReducer'

describe('userReducer', () => {
  test('should return user -> actionTypes = LOAD_USER', () => {
    const testuser = { user: 'Skylab' }
    const Action = {
      type: actionTypes.LOAD_USER,
      user: testuser
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ user: testuser })
  })

  test('should return error -> actionTypes = LOAD_USER_ERROR', () => {
    const testuser = 'error'
    const Action = {
      type: actionTypes.LOAD_USER_ERROR,
      error: testuser
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ error: testuser })
  })

  test('should return user -> actionTypes = ADD_AND_LOAD_USER', () => {
    const testUser = { user: 'Skylab' }
    const Action = {
      type: actionTypes.ADD_AND_LOAD_USER,
      user: testUser
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ user: testUser })
  })

  test('should return error -> actionTypes = ADD_AND_LOAD_USER_ERROR', () => {
    const testUser = 'error'
    const Action = {
      type: actionTypes.ADD_AND_LOAD_USER_ERROR,
      error: testUser
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ error: testUser })
  })

  test('should return user -> actionTypes = ADD_FAVORITE', () => {
    const testFavorite = { favorite: 'skylab' }
    const Action = {
      type: actionTypes.ADD_FAVORITE,
      user: testFavorite
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ user: { favorite: 'skylab' } })
  })

  test('should return error -> actionTypes = ADD_FAVORITE_ERROR', () => {
    const testUser = 'error'
    const Action = {
      type: actionTypes.ADD_FAVORITE_ERROR,
      error: testUser
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ error: testUser })
  })

  test('should return user -> actionTypes = DELETE_FAVORITE', () => {
    const testDeleteFavorite = { favorite: 'skylab' }
    const Action = {
      type: actionTypes.DELETE_FAVORITE,
      user: testDeleteFavorite
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ user: { favorite: 'skylab' } })
  })

  test('should return error -> actionTypes = DELETE_FAVORITE_ERROR', () => {
    const testUser = 'error'
    const Action = {
      type: actionTypes.DELETE_FAVORITE_ERROR,
      error: testUser
    }

    const state = userReducer({}, Action)

    expect(state).toEqual({ error: testUser })
  })

  test('should return the default state', () => {
    const state = userReducer({}, { type: 'skylab' })

    expect(state).toEqual({})
  })
})
