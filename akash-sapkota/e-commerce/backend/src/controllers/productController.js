function productController(Product) {
  function getMethod(req, res) {
  const query = {id : req.id};

    
    Product.findOne(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
       return res.send(errorFindProducts);
      }
       return res.json(product);
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
  function allMiddleware(req, res, next) {
    req.id = +req.params.productId;
    next();
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = productController;
