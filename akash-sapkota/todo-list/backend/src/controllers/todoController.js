/* eslint-disable no-underscore-dangle */
function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorTodo, todo) => {
      if (errorTodo) {
        res.send(errorTodo);
      } else {
        res.json(todo);
      }
    });
  }
  function deleteMethod({ body }, res) {
    Todo.findByIdAndRemove(body._id, body, (errorFindProducts, removedTodo) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.send(removedTodo);
    });
  }

  function postMethod({ body }, res) {
    Todo.findByIdAndUpdate(body._id, body, (errorFindProducts, updatedTodo) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.send(updatedTodo);
    });
  }

  function putMethod(req, res) {
    const newTodo = req.body;
    Todo.create(newTodo, (errorTodo) => {
      if (errorTodo) {
        res.send(errorTodo);
      } else {
        res.json(newTodo);
      }
    });
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = todoController;
