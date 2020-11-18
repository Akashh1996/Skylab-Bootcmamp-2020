function basketDeleteController(BasketProduct) {
  function deleteMethod(req, res) {
    const query = { id: req.product };

    BasketProduct.deleteOne(query, (errorFindProducts) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.send('deleted');
    });
  }
  function allMiddleware(req, res, next) {
    req.product = +req.params.productId;
    next();
  }
  return {
    deleteMethod, allMiddleware,
  };
}

module.exports = basketDeleteController;
