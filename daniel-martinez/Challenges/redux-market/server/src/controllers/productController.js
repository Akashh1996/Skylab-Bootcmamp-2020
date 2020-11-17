function productController(Product) {
  function getMethod(req, res) {
    const query = { id: req.params.productId };
    Product.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(products);
    });
  }

  return { getMethod };
}

module.exports = productController;
