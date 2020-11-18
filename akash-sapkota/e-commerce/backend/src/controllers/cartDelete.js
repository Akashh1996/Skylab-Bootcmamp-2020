function cartDeleteController(Cart){
    function deleteMethod(req, res) {
        const query = { id: req.id };
        Cart.deleteOne(query, (errorFindProducts) => {
          if (errorFindProducts) {
            res.send(errorFindProducts);
          }
          res.send('deleted');
        });
      }
      function getMethod(req, res) {
        const query = {};
        Cart.find(query, (errorFindProducts, product) => {
          if (errorFindProducts) {
            res.send(errorFindProducts);
          }
          res.json(product);
        });
      }
    
    function allMiddleware(req, res, next) {
        req.id = +req.params.productId;
        next();
      }
    return {
        deleteMethod,getMethod, allMiddleware
    }
}

module.exports = cartDeleteController