/* eslint-disable no-console */
function listController(items) {
  function getMethod(req, res) {
    const query = {};
    items.find(query, (errorFindItem, allItems) => {
      if (errorFindItem) {
        return res.send(errorFindItem);
      }
      console.log('getting data ...');
      return res.json(allItems);
    });
  }

  function deleteMethod(req, res) {
    const query = req.query.id;
    items.findByIdAndRemove(query, (errorFindItem) => {
      if (errorFindItem) {
        return res.send(errorFindItem);
      }
      return res.send('deleting an item...');
    });
  }

  function putMethod(req, res) {
    const query = req.query.value;
    items.create({ item: query }, (errorCreating) => {
      if (errorCreating) {
        return res.send(errorCreating);
      }
      return res.send('created new document ...');
    });
  }

  function patchMethod(req, res) {
    const { id, value } = req.query;
    items.findByIdAndUpdate(id, { item: value }, (errorUpdating) => {
      if (errorUpdating) {
        return res.send(errorUpdating);
      }
      return res.send('updated document....');
    });
  }

  return {
    getMethod, deleteMethod, putMethod, patchMethod,
  };
}

module.exports = listController;
