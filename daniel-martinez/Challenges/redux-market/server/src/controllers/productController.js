function productController(Product) {
  function getMethod(req, res) {
    const query = { id: req.params.productId };
    Product.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(products);
    });
  }

  return { getMethod };
}

module.exports = productController;
