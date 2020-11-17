/* eslint-disable linebreak-style */
function productController(Product) {
  function getMethod(req, res) {
    const query = { id: req.product };
    Product.find(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(product);
    });
  }

  function postMethod(req, res) {
    const updatedproduct = {
      ...req.product,
      ...req.body,
    };

    Product.setproduct(updatedproduct);

    res.json(updatedproduct);
  }

  function deleteMethod(req, res) {
    const id = +req.params.productId;

    Product.deleteproduct(id);

    res.json(Product.getproductes());
  }

  function allMiddleware(req, res, next) {
    req.product = +req.params.productId;
    next();
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = productController;
