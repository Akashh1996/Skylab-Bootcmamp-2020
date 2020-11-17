function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindProducts, todo) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(todo);
    });
  }

  function deleteMethod(req, res) {
    const query = req.params.id;
    Todo.findByIdAndRemove(query, (errorDelete) => {
      if (errorDelete) {
        return res.send(errorDelete);
      }
      return res.send('delete');
    });
  }

  function updateMethod(req, res) {
    const query = req.params.id;
    Todo.findByIdAndUpdate(query, (errorUpdate, todo) => {
      if (errorUpdate) {
        return res.send(errorUpdate);
      }
      return res.send(todo);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Todo.create(query, (errorPutItem, item) => {
      if (errorPutItem) {
        res.send(errorPutItem);
      }
      res.json(item);
    });
  }

  return {
    getMethod, deleteMethod, putMethod, updateMethod,
  };
}

module.exports = todoController;
