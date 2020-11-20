function projectController(Project) {
  function getMethod(req, res) {
    const query = {};
    Project.find(query, (errorFindProject, project) => (
      errorFindProject ? res.send(errorFindProject) : res.json(project)
    ));
  }

  return {
    getMethod,
  };
}
module.exports = projectController;
