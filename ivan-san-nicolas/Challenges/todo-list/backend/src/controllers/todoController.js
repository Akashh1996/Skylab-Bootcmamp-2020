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
    const query = { todoId };
    const update = { name: todoNewName };
    Todo.findOneAndUpdate(query, update);
    Todo.findOne(query, (errorFindingTodo, todo) => {
      errorFindingTodo ? res.send(errorFindingTodo) : res.json(todo);
    });
  }

  function postMethod(req, res) {
    const { newId } = req.body;
    const { newTodo } = req.body;
    const { todoList } = req.body;
    const query = [];
    const conditionToUpdate = [...todoList, { id: newId, name: newTodo }];
    Todo.updateOne(query, conditionToUpdate, (errorCreatingTodo, todos) => {
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
