/* eslint-disable no-underscore-dangle */
function todosController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorGetTodos, todos) => ((errorGetTodos)
      ? res.send(errorGetTodos) : res.json(`${todos} get succesfully`)));
  }

  function putMethod({ body }, res) {
    Todo.create(body, (errorAddNewTodos, newTodo) => ((errorAddNewTodos)
      ? res.send(errorAddNewTodos) : res.json(`${newTodo} added succesfully`)));
  }

  function postMethod({ body }, res) {
    Todo.findByIdAndUpdate(body._id, body, (errorModifiedTodos, modifiedTodo) => (
      (errorModifiedTodos) ? res.send(errorModifiedTodos) : res.json(`${modifiedTodo} modified succesfully`)));
  }

  function deleteMethod({ body }, res) {
    Todo.findByIdAndRemove(body._id, body, (errorFindTodos, removeTodo) => {
      if (errorFindTodos) {
        res.send(errorFindTodos);
      } else {
        res.json(removeTodo);
      }
    });
  }

  return {
    getMethod, putMethod, postMethod, deleteMethod,
  };
}

module.exports = todosController;
