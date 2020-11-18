/* eslint-disable no-unused-expressions */
function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindingTodo, todo) => {
      errorFindingTodo ? res.send(errorFindingTodo) : res.json(todo);
    });
  }

  function deleteMethod(req, res) {
    const { todoId } = req.body;
    const query = { todoId };
    Todo.deleteOne(query, (errorDeletingTodo) => {
      errorDeletingTodo ? res.send(errorDeletingTodo) : res.json();
    });
  }

  function patchMethod(req, res) {
    const { todoId } = req.body;
    const { todoNewName } = req.body;
    const query = { id: +todoId };
    const update = { name: todoNewName };
    Todo.findOneAndUpdate(query, update, (errorUpdatingTodo, updatedInput) => {
      errorUpdatingTodo ? res.send(errorUpdatingTodo) : res.send(updatedInput);
    });
  }

  function postMethod(req, res) {
    const { newId, newTodo } = req.body;
    const newInput = { id: newId, name: newTodo };
    Todo.create(newInput, (errorCreatingTodo, todos) => {
      errorCreatingTodo ? res.send(errorCreatingTodo) : res.json(todos);
    });
  }

  return {
    getMethod,
    deleteMethod,
    patchMethod,
    postMethod,
  };
}

module.exports = todoController;
