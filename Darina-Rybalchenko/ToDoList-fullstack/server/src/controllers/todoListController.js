/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
function todoListController(TodoList) {
  function getMethod(req, res) {
    const query = {};
    TodoList.find(query, (errorCreate, item) => {
      if (errorCreate) {
        res.send(errorCreate);
      }
      res.json(item);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    TodoList.create(query, (errorCreate, item) => {
      if (errorCreate) {
        return res.send(errorCreate);
      }
      return res.json(item);
    });
  }

  function postMethod({ body }, res) {
    TodoList.findByIdAndUpdate(body._id, body, (errorCreate, item) => {
      if (errorCreate) {
        return res.send(errorCreate);
      }
      return res.send(item);
    });
  }

  function deleteMethod({ body }, res) {
    TodoList.findByIdAndRemove(body._id, body, (errorCreate, item) => {
      if (errorCreate) {
        return res.send(errorCreate);
      }
      return res.send(item);
    });
  }

  return {
    getMethod, putMethod, postMethod, deleteMethod,
  };
}

module.exports = todoListController;
