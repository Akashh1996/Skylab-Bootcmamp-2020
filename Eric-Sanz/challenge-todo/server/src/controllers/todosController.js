function todosController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindTodos, todos) => ((errorFindTodos)
      ? res.send(errorFindTodos) : res.json(todos)));
  }

  function putMethod(req, res) {
    const newTodo = { input: req.body };

    Todo.create(newTodo, (errorFindTodos) => {
      if (errorFindTodos) {
        res.send(errorFindTodos);
      } else {
        res.json(newTodo);
      }
    });
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = todosController;
