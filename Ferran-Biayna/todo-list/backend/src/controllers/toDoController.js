function toDoController(ToDo) {
  function getMethod(req, res) {
    ToDo.find({}, (errorFindList, toDoList) => (errorFindList
      ? res.send(errorFindList)
      : res.json(toDoList)));
  }

  function postMethod({ body }, res) {
    ToDo.create(body, (errorAddNewItem, newToDo) => (errorAddNewItem
      ? res.send(errorAddNewItem)
      : res.json(newToDo)));
  }

  function putMethod(req, res) {
    ToDo.findByIdAndUpdate(req.params.toDoId, req.body,
      (errorUpdateItem, toDoList) => (errorUpdateItem
        ? res.send(errorUpdateItem)
        : res.json(toDoList)));
  }

  function deleteMethod({ params }, res) {
    ToDo.findByIdAndRemove(params.toDoId, (errorDeleteItem) => (errorDeleteItem
      ? res.send(errorDeleteItem)
      : res.json('Deleted Successfully!')));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = toDoController;
