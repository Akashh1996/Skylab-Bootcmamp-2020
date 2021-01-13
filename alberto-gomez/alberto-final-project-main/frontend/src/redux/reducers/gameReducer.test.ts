import actionTypes from '../actions/actionTypes'
import reducer from './gameReducer'

describe('gameReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {}
    )
  })

  describe('for a single game...', () => {
    test('should handle LOAD_GAME', () => {
      const gameItem = { name: 'Skylab mola!' }
      expect(reducer({}, {
        type: actionTypes.LOAD_GAME,
        gameItem
      })).toEqual(
        {
          gameObject: gameItem
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

  describe('for an array of games', () => {
    test('should handle LOAD_ALL_GAMES', () => {
      const gameCollection = [{ rank: 1 }, { rank: 2 }]
      expect(reducer({}, {
        type: actionTypes.LOAD_ALL_GAMES,
        gameCollection
      })).toEqual(
        {
          gameArray: gameCollection
        }
      )
    })
  })
})
