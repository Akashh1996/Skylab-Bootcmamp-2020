/* eslint-disable no-underscore-dangle */

const { ObjectId } = require('mongodb');

function cartController(cartProducts) {
  function getMethod(req, res) {
    const query = {};
    const getCallBack = (error, cartList) => (error ? res.send(error) : res.send(cartList));
    cartProducts.find(query)
      .populate('product')
      .exec(getCallBack);
  }

  function putMethod(req, res) {
    const { item, quantity, addOrDelete } = req.body;
    const query = { product: item._id };
    let update = null;

    if (addOrDelete === 'add') {
      update = { $inc: { quantity } };
    } else {
      update = { $inc: { quantity: -1 } };
    }

    const putCallback = (error, newItem) => (error ? res.send(error) : res.send(newItem));
    cartProducts.findOneAndUpdate(query, update, { upsert: true, new: true })
      .populate('product')
      .exec(putCallback);
  }

  function deleteMethod(req, res) {
    const { item } = req.body;

    const query = { product: new ObjectId(item._id) };

    const deleteCallback = (error, deleteItem) => (
      error
        ? res.send(error)
        : res.send(deleteItem)
    );

    cartProducts.deleteOne(query, deleteCallback);
  }

  function deleteAllMethod(req, res) {
    const query = {};
    cartProducts.remove(query, (errorDeleteAll, products) => {
      if (errorDeleteAll) {
        return res.send(errorDeleteAll);
      }
      return res.json(products);
    });
  }
  return {
    getMethod, putMethod, deleteMethod, deleteAllMethod,
  };
}

module.exports = cartController;
