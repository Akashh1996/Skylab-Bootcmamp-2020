function productsController(Products) {
  function getMethod(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '1800');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
    const query = {};
    function findCallback(errorFindingProducts, products) {
      return errorFindingProducts ? res.send(errorFindingProducts) : res.json(products);
    }

    Products.find(query, findCallback);
  }

  function postMethod(req, res) {
    const query = req.body;
    function findCallback(errorFindingProducts, products) {
      return errorFindingProducts ? res.send(errorFindingProducts) : res.json(products);
    }

    Products.create(query, findCallback);
    // const product = new Products(req.body);
    // product.save((error, post) => {
    //   if (error) {
    //     return next(error);
    //   }
    //   return res.json(post);
    // });
  }

  function putMethod(req, res) {
    const query = req.body.id;
    const update = req.body;
    Products.findByIdAndUpdate(
      query, update, { new: true }, (error, updatedProduct) => {
        if (error) {
          res.send(error);
        }
        res.send(updatedProduct);
      },
    );
  }

  function deleteMethod(req, res) {
    const query = req.body.id;
    Products.findByIdAndDelete(query, (error) => {
      if (error) {
        res.send(error);
      }
      res.send('Successfully deleted');
    });
  }

  return {
    getMethod,
    postMethod,
    putMethod,
    deleteMethod,
  };
}

module.exports = productsController;
