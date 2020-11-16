function cartDelete(Product) {
  function deleteMethod(req, res) {
    const productId = (+req.params.productId);
    Product.deleteProduct(productId);
    res.json(Product.getCart());
  }
  return {
    deleteMethod,
  };
}

module.exports = cartDelete;
