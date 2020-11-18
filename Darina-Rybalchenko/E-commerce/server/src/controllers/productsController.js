function productsController(Products) {
  function getMethod(req, res) {
    const query = { };
    Products.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(products);
    });
  }
  return { getMethod };
}

module.exports = productsController;
