function projectController(Project) {
    function allMiddleware(req, res, next) {
      const query = { id: +req.params.projectId };
      function findCallback(errorFindProjects, project) {
        if (errorFindProjects) {
          return res.send(errorFindProjects);
        }
        req.project = project;
        return next();
      }
      Project.findOne(query, findCallback);
    }
  
    function getMethod(req, res) {
      res.json(req.project);
    }
  
    function postMethod(req, res) {
      const updatedProject = {
        ...req.project,
        ...req.body,
      };
  
      Project.setProject(updatedProject);
  
      res.json(updatedProject);
    }
  
    function deleteMethod(req, res) {
      const id = +req.params.projectId;
  
     Project.deleteproject(id);
  
      res.json(project.getProjects());
    }
  
    return {
      getMethod, postMethod, deleteMethod, allMiddleware,
    };
  }
  
  module.exports = projectController;
  