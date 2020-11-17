function cartController(Cart) {
  function getMethod(req, res) {
    res.status(200);
    res.send(Cart.getCart());
  }

  function postMethod(req, res) {
    console.log(req);
    const productId = req.query.id;
    const products = Cart.getProducts();
    const cartProduct = products.find((product) => product.id === productId);
    Cart.addProductToCart(cartProduct);
    res.status(200);
    res.send(Cart.getCart());
  }
  return {
    getMethod,
    postMethod,

  };
}

module.exports = cartController;
