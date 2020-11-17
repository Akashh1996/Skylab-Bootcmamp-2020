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
    console.log(query);
    Todo.deleteOne(query, (errorDeletingTodo) => {
      errorDeletingTodo ? res.send(errorDeletingTodo) : res.json('asasa');
    });
  }

  return {
    getMethod,
    deleteMethod,
  };
}

module.exports = todoController;
