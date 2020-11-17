function productController(Product, Cart) {
  function getMethod(req, res) {
    const query = { id: +req.params.productId };
    Product.findOne(query, (errorFindProduct, product) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      } else {
        res.json(product);
      }
    });
  }

  async function postMethod(req, res) {
    let product = null;
    await Product.findOne({ id: +req.params.productId }, (errorFindProduct, oneProduct) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      } else {
        product = oneProduct;
      }
    });

    await Cart.create({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
      url: product.url,
      price: product.price,
    }, (errorAddProduct, newProduct) => {
      if (errorAddProduct) {
        res.send(errorAddProduct);
      } else {
        res.json(newProduct);
      }
    });
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = productController;
