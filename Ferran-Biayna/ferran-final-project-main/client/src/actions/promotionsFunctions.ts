import axios from 'axios'
import { hostPromotionsUrl } from '../utils/hostUrl'
import actionTypes from './actionTypes'

function requestPromotionsSuccess (promotions: object) {
  return {
    type: actionTypes.LOAD_PROMOTIONS,
    promotions
  }
}

function requestPromotionsError (error: string) {
  return {
    type: actionTypes.LOAD_PROMOTIONS_ERROR,
    error
  }
}

function requestPromotionSuccess (promotion: object) {
  return {
    type: actionTypes.LOAD_PROMOTION,
    promotion
  }
}

function requestPromotionError (error: string) {
  return {
    type: actionTypes.LOAD_PROMOTION_ERROR,
    error
  }
}

function getEstablishmentSuccess (establishment: object) {
  return {
    type: actionTypes.LOAD_ESTABLISHMENT,
    establishment
  }
}

function getEstablishmentError (error: string) {
  return {
    type: actionTypes.LOAD_ESTABLISHMENT_ERROR,
    error
  }
}

export function requestPromotions () {
  return async (dispatch: Function) => {
    try {
      const promotions = await axios.get(hostPromotionsUrl(''))
      dispatch(requestPromotionsSuccess(promotions.data))
    } catch (error) {
      dispatch(requestPromotionsError(error))
    }
  }
}

export function requestPromotion (id: string) {
  return async (dispatch: Function) => {
    try {
      const promotion = await axios.get(hostPromotionsUrl('promotion'), { params: { id } })
      dispatch(requestPromotionSuccess(promotion.data))
    } catch (error) {
      dispatch(requestPromotionError(error))
    }
  }
}

export function getEstablishment (id: string) {
  return async (dispatch: Function) => {
    try {
      const promotion = await axios.get(hostPromotionsUrl('establishment'), { params: { id } })
      dispatch(getEstablishmentSuccess(promotion.data))
    } catch (error) {
      dispatch(getEstablishmentError(error))
    }
  }
}
