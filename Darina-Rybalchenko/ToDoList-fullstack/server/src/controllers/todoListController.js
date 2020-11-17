function todoListController(TodoList) {
  function getMethod(req, res) {
    const query = {};
    TodoList.find(query, (errorCreate, todo) => {
      if (errorCreate) {
        res.send(errorCreate);
      }
      res.json(todo);
    });
  }
  return { getMethod };
}

module.exports = todoListController;
