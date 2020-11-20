function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindTodo, todo) => (
      errorFindTodo ? res.send(errorFindTodo) : res.json(todo)
    ));
  }
  function postMethod(req, res) {
    const query = req.body;
    Todo.create(query, (errorFindTodo, todo) => (
      errorFindTodo ? res.send(errorFindTodo) : res.json(todo)));
  }
  function deleteMethod(req, res) {
    const query = req.body;
    Todo.findOne(query, (errorFindTodo, todo) => {
      if (errorFindTodo) {
        return res.send(errorFindTodo);
      }
      const id = req.delete;
      // eslint-disable-next-line no-param-reassign
      todo.id = id;
      todo.delete();
      return res.send(todo);
    });
  }
  return {
    getMethod, postMethod, deleteMethod,
  };
}
module.exports = todoController;
