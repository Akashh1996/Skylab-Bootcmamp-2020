/* eslint-disable no-underscore-dangle */
function todosController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindTodos, todos) => ((errorFindTodos)
      ? res.send(errorFindTodos) : res.json(todos)));
  }

  function putMethod(req, res) {
    const newTodo = req.body;

    Todo.create(newTodo, (errorFindTodos) => {
      if (errorFindTodos) {
        res.send(errorFindTodos);
      } else {
        res.json(newTodo);
      }
    });
  }

  function postMethod({ body }, res) {
    Todo.findByIdAndUpdate(body._id, body, (errorFindTodos, modifiedTodo) => {
      if (errorFindTodos) {
        res.send(errorFindTodos);
      } else {
        res.json(modifiedTodo);
      }
    });
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
