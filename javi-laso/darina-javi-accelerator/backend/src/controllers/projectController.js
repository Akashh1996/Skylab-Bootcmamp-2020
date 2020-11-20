function projectController(projectSchema) {
  function getProjectsMethod(req, res) {
    const query = {};
    const getCallBack = (projectsError, projects) => (
      projectsError ? res.send(projectsError) : res.send(projects)
    );
    projectSchema.find(query)
      .populate('creator')
      .exec(getCallBack);
  }

  function postProjectMethod(req, res) {
    const project = req.body;
    const postCallback = (postError, newProject) => (
      postError ? res.send(postError) : res.send(newProject)
    );
    projectSchema.create(project, postCallback);
  }

  return { getProjectsMethod, postProjectMethod };
}

module.exports = projectController;
