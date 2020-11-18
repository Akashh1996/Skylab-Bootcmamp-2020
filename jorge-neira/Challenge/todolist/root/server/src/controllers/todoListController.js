function todosListController(Todos) {
  function getMethod(req, res) {
    const query = {};

    Todos.find(query, (errorSendingTodoList, todoList) => (
      errorSendingTodoList
        ? res.send(errorSendingTodoList)
        : res.json(todoList)
    ));
  }

  function postMethod({ body }, res) {
    Todos.create(body, (errorCreateTodo) => (errorCreateTodo
      ? res.send(errorCreateTodo)
      : res.json({ ...body, status: 'Created' })));
  }

  function patchMethod(req, res) {
    const { todoId, todoDescription } = req.body;

    Todos.findOneAndUpdate(
      { todoId },
      { todoDescription },
      { new: true },
      (errorUpdatingDescription, newTodoUpdated) => (
        errorUpdatingDescription
          ? res.send(errorUpdatingDescription)
          : res.json(newTodoUpdated)),
    );
  }

  function deleteMethod({ body }, res) {
    Todos.deleteOne(body, (errorOnDelte) => (
      errorOnDelte
        ? res.send(errorOnDelte)
        : res.json({ ...body, state: 'Deleted' })));
  }

  return {
    getMethod, postMethod, deleteMethod, patchMethod,
  };
}

module.exports = todosListController;
