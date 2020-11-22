/* eslint-disable no-console */
function projectController(projectSchema) {
  function getProjectDetailMethod(req, res) {
    const query = { _id: req.params.projectId };
    const getCallBack = (projectsError, projects) => (
      projectsError ? res.send(projectsError) : res.send(projects)
    );
    projectSchema.findOne(query)
      .populate('creator')
      .exec(getCallBack);
  }
  return { getProjectDetailMethod };
}

module.exports = projectController;
