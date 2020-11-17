/* eslint-disable no-unused-expressions */
function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindingTodo, todo) => {
      errorFindingTodo ? res.send(errorFindingTodo) : res.send(todo);
    });
  }

  function deleteMethod(req, res) {
    const { todoId } = req.query;
    const query = { id: todoId };
    Todo.deleteOne(query, (errorFindingTodo, todo) => {
      (errorFindingTodo ? res.send(errorFindingTodo) : res.send(todo));
    });
  }

  return {
    getMethod,
    deleteMethod,
  };
}

module.exports = todoController;
