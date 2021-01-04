function productsListController(Products) {
  function getMethod(req, res) {
    const query = {};
    Products.find(query, (errorFindProducts, products) => (
      errorFindProducts
        ? res.send(errorFindProducts)
        : res.json(products)));
  }
  return {
    getMethod,
  };
}

module.exports = productsListController;
