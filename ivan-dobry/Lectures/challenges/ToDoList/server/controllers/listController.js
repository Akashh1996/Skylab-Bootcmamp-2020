function listController(items) {
  function getMethod(req, res) {
    const query = {};
    items.find(query, (errorFindItem, allItems) => (
      errorFindItem
        ? res.send(errorFindItem)
        : res.json(allItems)
    ));
  }

  function deleteMethod(req, res) {
    const query = req.query.id;
    items.findByIdAndRemove(query, (errorFindItem) => (
      errorFindItem
        ? res.send(errorFindItem)
        : res.send('deletinf an item...')
    ));
  }

  function putMethod(req, res) {
    const query = req.query.value;
    items.create({ item: query }, (errorCreating) => (
      errorCreating
        ? res.send(errorCreating)
        : res.send('created new document ...')
    ));
  }

  function patchMethod(req, res) {
    const { id, value } = req.query;
    items.findByIdAndUpdate(id, { item: value }, (errorUpdating) => (
      errorUpdating
        ? res.send(errorUpdating)
        : res.send('updated document...')
    ));
  }

  return {
    getMethod, deleteMethod, putMethod, patchMethod,
  };
}

module.exports = listController;
