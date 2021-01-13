export {}
const { Router } = require('express')
const PromotionsController = require('../controllers/PromotionsController')
const PromotionController = require('../controllers/PromotionController')
const EstablishmentController = require('../controllers/EstablishmentController')

function promotionsRouter (establishmentsModel, promotionsModel) {
  const router = Router()
  const promotions = PromotionsController(promotionsModel)
  const promotion = PromotionController(promotionsModel)
  const establishment = EstablishmentController(establishmentsModel)

  router.route('/')
    .get(promotions.getMethod)

  router.route('/promotion')
    .get(promotion.getMethod)
    .post(promotion.postMethod)

  router.route('/establishment')
    .get(establishment.getMethod)
    .post(establishment.postMethod)

  return router
}

module.exports = promotionsRouter
