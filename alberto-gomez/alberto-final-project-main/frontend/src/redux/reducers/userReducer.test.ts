import actionTypes from '../actions/actionTypes'
import reducer from './userReducer'

describe('userReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {}
    )
  })

  describe('for a single user...', () => {
    test('should handle LOAD_USER', () => {
      const userItem = { name: 'Alberto' }
      expect(reducer({}, {
        type: actionTypes.LOAD_USER,
        userItem
      })).toEqual(
        {
          userObject: userItem
        }
      )
    })

    test('should handle SEND_USER', () => {
      const userItem = { name: 'Alberto' }
      expect(reducer({}, {
        type: actionTypes.SEND_USER,
        userItem
      })).toEqual(
        {
          userObject: userItem
        }
      )
    })

    test('should handle LOGIN_USER_GOOGLE', () => {
      const user = { name: 'Alberto' }
      expect(reducer({}, {
        type: actionTypes.LOGIN_USER_GOOGLE,
        user
      })).toEqual(
        {
          user: user
        }
      )
    })

    test('should handle LOGOUT_USER', () => {
      const user = { name: 'Alberto' }
      expect(reducer({}, {
        type: actionTypes.LOGOUT_USER,
        null
      })).toEqual(
        {
          userObject: null
        }
      )
    })

    test('should handle LOAD_ERROR', () => {
      const error = { error: 'error 404' }
      expect(reducer({}, {
        type: actionTypes.LOAD_ERROR,
        error
      })).toEqual(
        {
          error: {
            error: 'error 404'
          }
        }
      )
    })
  })
})
