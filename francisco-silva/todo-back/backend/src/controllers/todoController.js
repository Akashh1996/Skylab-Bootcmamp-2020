function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindProducts, todo) => (
      errorFindProducts ? res.send(errorFindProducts) : res.json(todo)
    ));
  }

  function deleteMethod(req, res) {
    const query = req.params.id;
    Todo.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('delete')
    ));
  }

  function updateMethod(req, res) {
    const query = req.params.id;
    Todo.findByIdAndUpdate(query, (errorUpdate, todo) => (
      errorUpdate ? res.send(errorUpdate) : res.send(todo)

    ));
  }

  function putMethod(req, res) {
    const query = req.body;
    Todo.create(query, (errorPutItem, todo) => (
      errorPutItem ? res.send(errorPutItem) : res.json(todo)
    ));
  }

  return {
    getMethod, deleteMethod, putMethod, updateMethod,
  };
}

module.exports = todoController;
