function productsListController(Products) {
  function getMethod(req, res) {
    const query = {};
    Products.find(query, (errorFindProduct, products) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      }
      res.json(products);
    });
  }
  return {
    getMethod,
  };
}

module.exports = productsListController;
