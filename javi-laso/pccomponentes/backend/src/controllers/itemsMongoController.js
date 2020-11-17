function itemsMongoController(itemSchema) {
  function getMethod(req, res) {
    const query = {};
    const findCallback = (errorFindItems, items) => {
      if (errorFindItems) {
        res.send(errorFindItems);
      } else {
        res.json(items);
      }
    };
    itemSchema.find(query, findCallback);
  }

  function postMethod(req, res) {
    const item = req.body;
    const createCallBack = (error, newItem) => {
      if (error) {
        res.send(error);
      } else {
        res.send(newItem);
      }
    };
    itemSchema.create(item, createCallBack);
  }

  function deleteMethod(req, res) {
    const item = req.body;
    const query = { 'product-type': item['product-type'] };
    const deleteCallback = (error) => {
      if (error) {
        res.send(error);
      } else {
        res.send('Deleted');
      }
    };
    itemSchema.deleteMany(query, deleteCallback);
  }

  function patchMethod(req, res) {
    const item = req.body;
    const query = { id: item.id };
    const patchCallback = (error) => {
      if (error) {
        res.send(error);
      } else {
        res.send('Updated');
      }
    };
    itemSchema.updateOne(query, { 'product-name': 'Caca' }, patchCallback);
  }

  function getByIdMethod(req, res) {
    const { itemId } = req.params;
    itemSchema.findOne({ id: itemId }, (errorFindItems, items) => {
      if (errorFindItems) {
        res.send(errorFindItems);
      } else {
        res.json(items);
      }
    });
  }

  return {
    getMethod, postMethod, deleteMethod, patchMethod, getByIdMethod,
  };
}

module.exports = itemsMongoController;
