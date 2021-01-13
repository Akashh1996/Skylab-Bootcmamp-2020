
import actionTypes from '../actions/actionTypes'
import promotionsReducer from '../reducers/promotionsReducer'

describe('promotionsReducer', () => {
  test('should return promotions -> actionTypes = LOAD_PROMOTIONS', () => {
    const testPromotions = { promotion: '¡pizzas para todos!' }
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTIONS,
      promotions: testPromotions
    }

    const state = promotionsReducer({}, promotionsAction)

    expect(state).toEqual({ promotions: testPromotions })
  })

  test('should return error -> actionTypes = LOAD_PROMOTIONS_ERROR', () => {
    const testPromotions = 'error'
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTIONS_ERROR,
      error: testPromotions
    }

    const state = promotionsReducer({}, promotionsAction)

    expect(state).toEqual({ error: testPromotions })
  })

  test('should return promotion -> actionTypes = LOAD_PROMOTION', () => {
    const testPromotion = { promotion: '¡pizzas para todos!' }
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTION,
      promotion: testPromotion
    }

    const state = promotionsReducer({}, promotionsAction)

    expect(state).toEqual({ promotion: testPromotion })
  })

  test('should return error -> actionTypes = LOAD_PROMOTION_ERROR', () => {
    const testPromotion = 'error'
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTION_ERROR,
      error: testPromotion
    }

    const state = promotionsReducer({}, promotionsAction)

    expect(state).toEqual({ error: testPromotion })
  })

  test('should return establishment -> actionTypes = LOAD_establishment', () => {
    const testEstablishment = { establishment: '¡pizzas para todos!' }
    const establishmentsAction = {
      type: actionTypes.LOAD_ESTABLISHMENT,
      establishment: testEstablishment
    }

    const state = promotionsReducer({}, establishmentsAction)

    expect(state).toEqual({ establishment: testEstablishment })
  })

  test('should return error -> actionTypes = LOAD_establishment_ERROR', () => {
    const testEstablishment = 'error'
    const establishmentsAction = {
      type: actionTypes.LOAD_ESTABLISHMENT_ERROR,
      error: testEstablishment
    }

    const state = promotionsReducer({}, establishmentsAction)

    expect(state).toEqual({ error: testEstablishment })
  })

  test('should return the default state', () => {
    const state = promotionsReducer({}, { type: 'boardPub' })

    expect(state).toEqual({})
  })
})
