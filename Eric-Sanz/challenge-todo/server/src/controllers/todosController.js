/* eslint-disable no-underscore-dangle */
function todosController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorGetTodos, todos) => ((errorGetTodos)
      ? res.send(errorGetTodos) : res.json(`${todos} get succesfully`)));
  }

  function putMethod({ body }, res) {
    Todo.create(body, (errorAddNewTodo, newTodo) => ((errorAddNewTodo)
      ? res.send(errorAddNewTodo) : res.json(`${newTodo} added succesfully`)));
  }

  function postMethod({ body }, res) {
    Todo.findByIdAndUpdate(body._id, body, (errorModifiedTodo, modifiedTodo) => (
      (errorModifiedTodo) ? res.send(errorModifiedTodo) : res.json(`${modifiedTodo} modified succesfully`)));
  }

  function deleteMethod({ body }, res) {
    Todo.findByIdAndRemove(body._id, body, (errorDeleteTodo, removeTodo) => (
      (errorDeleteTodo) ? res.send(errorDeleteTodo) : res.json(`${removeTodo} deleted succesfully`)));
  }

  return {
    getMethod, putMethod, postMethod, deleteMethod,
  };
}

module.exports = todosController;
