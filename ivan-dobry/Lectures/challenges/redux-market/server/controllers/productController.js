/* eslint-disable no-console */
function productController(markets) {
  function getMethod(req, res) {
    const query = { id: +req.query.id };
    markets.findOne(query, (errorFindProduct, product) => {
      if (errorFindProduct) {
        return res.send(errorFindProduct);
      }
      console.log('getting data');
      return res.json(product);
    });
  }

  return {
    getMethod,
  };
}

module.exports = productController;
