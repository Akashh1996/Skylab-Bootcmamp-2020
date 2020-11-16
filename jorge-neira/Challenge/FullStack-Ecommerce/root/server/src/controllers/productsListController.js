function productsListController(Products) {
  function getMethod(req, res) {
    res.json(Products.getProducts());
  }

  return {
    getMethod,
  };
}

module.exports = productsListController;
