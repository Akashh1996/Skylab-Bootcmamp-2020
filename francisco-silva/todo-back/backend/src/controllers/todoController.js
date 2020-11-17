function todoController(Todo) {
  function getMethod(req, res) {
    const query = {};
    Todo.find(query, (errorFindProducts, todo) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json('asd');
    });
  }

  return {
    getMethod,
  };
}
module.exports = todoController;
