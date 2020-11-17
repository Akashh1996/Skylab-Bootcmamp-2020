/* eslint-disable linebreak-style */
function listController(List) {
  function getMethod(req, res) {
    const query = {};
    List.find(query, (errorFindTasks, tasks) => {
      if (errorFindTasks) {
        res.send(errorFindTasks);
      } else {
        res.json(tasks);
      }
    });
  }

  function postMethod(req, res) {
    // eslint-disable-next-line no-console
    console.log(req);
    const taskName = req.query.task;
    const query = { task: taskName };
    List.create(query, (errorFindTask, tasks) => {
      if (errorFindTask) {
        res.send(errorFindTask);
      } else {
        res.json(tasks);
      }
    });
  }

  function deleteMethod({ body }, res) {
    // eslint-disable-next-line no-underscore-dangle
    List.findByIdAndRemove(body._id, body, (errorFindTask, tasks) => {
      if (errorFindTask) {
        res.send(errorFindTask);
      } else {
        res.json(tasks);
      }
    });
  }

  return {
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = listController;
