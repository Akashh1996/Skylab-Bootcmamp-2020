function basketProductController(Basket, Product) {
  async function postMethod(req, res) {
    const query = { id: +req.params.productId };

    await Product.findOne(query, (errorFindProduct, product) => {
      if (errorFindProduct) {
        return res.send(errorFindProduct);
      }
      Basket.create({
        id: product.id, 'product-name': product['product-name'], 'product-image-url': product['product-image-url'], price: product.price,
      }, (createError, createdBasket) => {
        if (createError) {
          return res.send(createError);
        }
        return res.json(createdBasket);
      });
    });
  }

  function deleteMethod(req, res) {
    const query = +req.params.productId;
    Basket.findOneAndRemove(query, (errorFindProduct, product) => {
      if (errorFindProduct) {
        return res.send(errorFindProduct);
      }
      return res.json(product);
    });
  }
  return { postMethod, deleteMethod };
}

module.exports = basketProductController;
