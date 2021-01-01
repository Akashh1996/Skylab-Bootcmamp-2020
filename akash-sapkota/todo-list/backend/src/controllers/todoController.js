function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorTodo, todo) => (errorTodo ? res.send(errorTodo) : res.json(todo)));
  }
  function deleteMethod({ body }, res) {
    Todo.findByIdAndRemove(body._id, body, (errorFindProducts, removedTodo) => (errorFindProducts ? res.send(errorFindProducts) : res.send(removedTodo)));
  }
  function postMethod({ body }, res) {
    Todo.findByIdAndUpdate(body._id, body, (errorFindProducts, updatedTodo) => (errorFindProducts ? res.send(errorFindProducts) : res.send(updatedTodo)));
  }
  function putMethod(req, res) {
    const newTodo = req.body;
    Todo.create(newTodo, (errorTodo) => (errorTodo ? res.send(errorTodo) : res.send(newTodo)));
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = todoController;
