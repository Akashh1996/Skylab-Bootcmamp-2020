function basketProductController(Basket, Product) {
  async function postMethod(req, res) {
    const query = { id: +req.params.productId };

    const productFounded = await Product.findOne(query, (errorFindProduct, product) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      }
      res.json(product);
    });
    Basket.create({
      id: productFounded.id, 'product-name': productFounded['product-name'], 'product-image-url': productFounded['product-image-url'], price: productFounded.price,
    });
  }

  function deleteMethod(req, res) {
    const query = +req.params.productId;
    Basket.findOneAndRemove(query, (errorFindProduct, product) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      }
      res.json(product);
    });
  }
  return { postMethod, deleteMethod };
}

module.exports = basketProductController;
