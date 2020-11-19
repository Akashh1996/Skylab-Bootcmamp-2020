function listController(List) {
  function getMethod(req, res) {
    const query = {};
    List.find(query, (errorFindTasks, tasks) => (
      errorFindTasks
        ? res.send(errorFindTasks)
        : res.json(tasks)
    ));
  }

  function postMethod(req, res) {
    const taskName = req.query.task;
    const query = { task: taskName };
    List.create(query, (errorFindTask, tasks) => (
      errorFindTask
        ? res.send(errorFindTask)
        : res.json(tasks)
    ));
  }

  function deleteMethod({ body }, res) {
    // eslint-disable-next-line no-underscore-dangle
    List.findByIdAndRemove(body._id, body, (errorFindTask, tasks) => (
      errorFindTask
        ? res.send(errorFindTask)
        : res.json(tasks)
    ));
  }

  return {
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = listController;
