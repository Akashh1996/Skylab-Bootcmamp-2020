function PromotionController (Promotions) {
  function getMethod (req, res) {
    const { id } = req.query
    Promotions.findById(id)
      .populate({ path: 'establishment' })
      .exec((errorFindPromotions, promotionsList) => (errorFindPromotions
        ? res.send(errorFindPromotions)
        : res.json(promotionsList)))
  }

  function postMethod (req, res) {
    const { newPromotion } = req.body
    Promotions.create(newPromotion,
      (errorNewPromotion, correctNewPromotion) => (errorNewPromotion
        ? res.send(errorNewPromotion)
        : res.json(correctNewPromotion)))
  }

  return {
    getMethod, postMethod
  }
}

module.exports = PromotionController
