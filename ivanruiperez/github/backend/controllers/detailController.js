function detailController(Project) {
  function getMethodDetail(req, res) {
    const { _id } = req.params.projectId;
    Project.findOne(_id, (errorFindProject, project) => {
      if (errorFindProject) {
        res.send(errorFindProject);
      }
      res.json(project);
    });
  }
  return {
    getMethodDetail,
  };
}

module.exports = detailController;
