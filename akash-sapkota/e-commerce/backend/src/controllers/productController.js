function productController(Product) {
  function getMethod(req, res) {
/*     req.id = +req.params.productId
 */    const query = {id : req.id};
    
    Product.find(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(product);
    });
  }
  function deleteMethod(req,res){
    const query = {id: req.id}
    Product.deleteOne(query, (error, product)=>{
      if(error){
        res.send(error)
      }
      res.send("deleted")
    })
  }

  function postMethod(req, res) {
    const updatedProduct = {
      ...req.product,
      ...req.body,
    };

    Product.setProduct(updatedProduct);

    res.json(updatedProduct);
  }
  function getCartMethod(req, res) {
    const id = +req.params.productId;
    Product.addToCart(id);
    res.send(Product.getProducts());
  }

  function allMiddleware(req, res, next) {
    req.id = +req.params.productId;
    next();
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware, getCartMethod,
  };
}

module.exports = productController;
