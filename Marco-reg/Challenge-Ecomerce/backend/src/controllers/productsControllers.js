/* eslint-disable linebreak-style */
function productsController(Product) {
  function getMethod(req, res) {
    const query = {};
    Product.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }

      return res.send(products);
    });
  }

  function putMethod(req, res) {
    Product.addProduct(req.body);

    res.json(Product.getproducts());
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = productsController;
