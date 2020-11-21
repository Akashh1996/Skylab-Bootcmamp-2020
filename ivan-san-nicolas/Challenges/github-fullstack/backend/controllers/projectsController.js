/* eslint-disable no-unused-expressions */
function projectsController(Projects) {
  function getMethod(req, res) {
    const query = {};
    const callback = (error, projects) => {
      error ? res.send(error) : res.json(projects);
    };

    Projects.find(query)
      .populate()
      .exec(callback);
  }

  return {
    getMethod,
  };
}

module.exports = projectsController;
