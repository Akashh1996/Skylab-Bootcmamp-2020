function todosListController(Todos) {
  function getMethod(req, res) {
    const query = {};

    Todos.find(query, (errorSendingTodoList, todoList) => (
      errorSendingTodoList
        ? res.send(errorSendingTodoList)
        : res.json(todoList)
    ));
  }

  function postMethod(req, res) {
    const createTodo = {
      ...req.body,
    };

    Todos.create(createTodo, (errorCreateTodo) => (errorCreateTodo
      ? res.send(errorCreateTodo)
      : res.json({ ...createTodo, status: 'Created' })));
  }

  function patchMethod(req, res) {
    const bodyContent = {
      ...req.body,
    };
    const { todoId } = bodyContent;
    const { todoDescription } = bodyContent;

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

  function deleteMethod(req, res) {
    const todoToDelete = {
      ...req.body,
    };

    Todos.deleteOne(todoToDelete, (errorOnDelte) => (
      errorOnDelte
        ? res.send(errorOnDelte)
        : res.json({ ...todoToDelete, state: 'Deleted' })));
  }

  return {
    getMethod, postMethod, deleteMethod, patchMethod,
  };
}

module.exports = todosListController;
