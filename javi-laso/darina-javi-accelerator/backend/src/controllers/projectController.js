function projectController(projecSchema) {
  function getProjectsMethod(req, res) {
    const query = {};
    const getCallBack = (projectsError, projects) => (
      projectsError ? res.send(projectsError) : res.send(projects)
    );
    projecSchema.find(query)
      .populate('creator')
      .exec(getCallBack);
  }

  function postProjectMethod(req, res) {
    const project = req.body;
    const postCallback = (postError, newProject) => (
      postError ? res.send(postError) : res.send(newProject)
    );
    projecSchema.create(project, postCallback);
  }

  return { getProjectsMethod, postProjectMethod };
}

module.exports = projectController;
