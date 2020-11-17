/* eslint-disable no-console */
function productsController(markets) {
  function getMethod(req, res) {
    const query = {};
    markets.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      console.log('getting data');
      return res.json(products);
    });
  }

  return {
    getMethod,
  };
}

module.exports = productsController;
