/* eslint-disable no-console */
function shoppingController(markets) {
  function getMethod(req, res) {
    const query = {};
    markets.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      console.log('getting shopping list data');
      return res.json(products);
    });
  }

  function putMethod(req, res) {
    const id = +req.query.id;
    Market.addShoppingList(id);
  }

  function deleteMethod(req, res) {
    const id = +req.query.id;
    Market.deleteFromShoppingList(id);
    res.json(shoppingList);
  }

  return {
    getMethod, putMethod, deleteMethod,
  };
}

module.exports = shoppingController;
