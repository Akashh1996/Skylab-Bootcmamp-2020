function basketController(Basket) {
  function getMethod(req, res) {
    const query = {};
    Basket.find(query, (errorFindProduct, basket) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      }
      res.json(basket);
    });
  }
  return { getMethod };
}

module.exports = basketController;
