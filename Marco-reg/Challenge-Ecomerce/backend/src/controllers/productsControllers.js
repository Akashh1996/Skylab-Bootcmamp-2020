/* eslint-disable linebreak-style */
function productsController(Product) {
  function getMethod(req, res) {
    const query = {};
    Product.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }

      return res.json(products);
    });
  }

  function putMethod(req, res) {
    const query1 = req.body.productId;
    const query2 = req.body;
    Product.findByIdAndUpdate(query1, query2, { new: true }, (error, updateProduct) => {
      if (error) {
        res.send(error);
      } else {
        res.send(updateProduct);
      }
    });
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = productsController;
