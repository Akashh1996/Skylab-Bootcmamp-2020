/* eslint-disable no-console */
function productController(Products) {
  function getMethod(req, res) {
    const query = { id: +req.params.productId };
    Products.findOne(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(product);
      console.log('product', product);
    });
  }
  return { getMethod };
}

module.exports = productController;
