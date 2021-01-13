function groceryListController(ProductModel) {
    function getMethod(req, res) {
        const {query: { product } } = req;
        function findCallback(error, productFound) {
          return error ? res.send(error) : res.json(productFound);
        }
    
        ProductModel.find({product}, findCallback);
    }

  return {
    getMethod,
  };
}

module.exports = groceryListController;