function itemsMongoController(itemSchema) {
  function getMethod(req, res) {
    const query = {};
    itemSchema.find(query, (errorFindItems, items) => {
      if (errorFindItems) {
        res.send(errorFindItems);
      } else {
        res.json(items);
      }
    });
  }

  function postMethod(req, res) {
    const item = req.body;
    itemSchema.create(item, (error, newItem) => {
      if (error) {
        res.send(error);
      } else {
        res.send(newItem);
      }
    });
  }

  function deleteMethod(req, res) {
    const item = req.body;
    itemSchema.deleteMany({ 'product-type': item['product-type'] }, (error) => {
      if (error) {
        res.send(error);
      } else {
        res.send('Deleted');
      }
    });
  }

  function patchMethod(req, res) {
    const item = req.body;
    itemSchema.updateOne({ id: item.id }, { 'product-name': 'Caca' }, (error) => {
      if (error) {
        res.send(error);
      } else {
        res.send('Updated');
      }
    });
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
