function listController(Product) {
  function getMethod(req, res) {
    const query = {};
    Product.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(products);
    });
  }

  return { getMethod };
}

module.exports = listController;
