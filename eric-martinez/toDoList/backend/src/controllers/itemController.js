function toDoListController(Items) {
  function getMethod(req, res) {
    const query = {};
    Items.find(query, (errorFindItems, items) => {
      if (errorFindItems) {
        return res.send(errorFindItems);
      }
      return res.json(items);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    Items.create(query, (errorPutItem, item) => {
      if (errorPutItem) {
        res.send(errorPutItem);
      }
      res.json(item);
    });
  }
  return { getMethod, putMethod };
}

module.exports = toDoListController;
