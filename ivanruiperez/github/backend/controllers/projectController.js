function projectController(Project) {
  function getMethod(req, res) {
    const query = {};
    Project.find(query, (errorFindProject, project) => (
      errorFindProject ? res.send(errorFindProject) : res.json(project)
    ));
  }

  function putMethod(req, res) {
    const query = req.body.newProject;
    Project.create(query, (errorPutProject, project) => (
      errorPutProject ? res.send(errorPutProject) : res.json(project)
    ));
  }

  return {
    getMethod, putMethod,
  };
}
module.exports = projectController;
