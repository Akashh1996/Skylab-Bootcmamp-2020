/* eslint-disable no-underscore-dangle */
function ListController(ToDo) {
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
  function putMethod({ body }, res) {
    ToDo.findByIdAndUpdate(body._id, body,
      (errorUpdateItem, toDoList) => (errorUpdateItem
        ? res.send(errorUpdateItem)
        : res.json(toDoList)));
  }

  function deleteMethod(req, res) {
    ToDo.findByIdAndRemove(req.body, (errorDeleteItem) => (errorDeleteItem
      ? res.send(errorDeleteItem)
      : res.json('Deleted Successfully!')));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = ListController;
