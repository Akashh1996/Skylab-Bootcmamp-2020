function basketController(BasketProduct) {
  function getMethod(req, res) {
    const query = {};
    BasketProduct.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(products);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    BasketProduct.create(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(product);
    });
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = basketController;
