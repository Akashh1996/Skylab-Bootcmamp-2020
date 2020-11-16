function basketProductController(Basket, Product) {
  function allMiddleware(req, res, next) {
    req.product = +req.params.productId;
    next();
  }

  async function postMethod(req, res) {
    const query = { id: req.product };
    const productFounded = await Product.findOne(query, (errorFindProduct, product) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      }
      res.json(product);
    });
    Basket.create({ id: productFounded.id, 'product-name': productFounded['product-name'] });
  }

  function deleteMethod(req, res) {
    const id = +req.params.productId;
    Product.deleteProductFromBasket(id);
    res.json(Product.getBasket());
  }
  return { postMethod, allMiddleware, deleteMethod };
}

module.exports = basketProductController;
