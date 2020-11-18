function todoListController(TodoList) {
  function getMethod(req, res) {
    const query = {};
    function findCallback(error, todoList) {
      return error ? res.send(error) : res.json(todoList);
    }

    TodoList.find(query, findCallback);
  }

  function postMethod(req, res) {
    const query = req.body;
    function findCallback(error, todoListItem) {
      return error ? res.send(error) : res.json(todoListItem);
    }

    TodoList.create(query, findCallback);
  }

  function putMethod(req, res) {
    const query = req.body.id;
    const update = req.body;
    function callback(error, updatedTodoListItem) {
      return error ? res.send(error) : res.send(updatedTodoListItem);
    }

    TodoList.findByIdAndUpdate(
      query, update, { new: true }, callback,
    );
  }

  function deleteMethod(req, res) {
    const { _id } = req.body;
    function callback(error, deletedListItem) {
      return error ? res.send(error) : res.json(deletedListItem);
    }

    TodoList.findByIdAndDelete(_id, callback);
  }

  return {
    getMethod,
    postMethod,
    putMethod,
    deleteMethod,
  };
}

module.exports = todoListController;
